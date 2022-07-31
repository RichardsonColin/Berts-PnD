const { configurationHandler } = require('./configurationHandler');

/*
 * Handles parameters from a form/data request for the purposes of using them
 * within an email:
 * - consumes parameters for structuring an email along with an associated configuration
 * - initializes service based mail builders
 */
exports.mailBuilderHandler = (mailParams) => {
  const configuration = configurationHandler(mailParams.type);

  return {
    getSESMailBuilder: () => {
      return new SESMailBuilder(mailParams, configuration);
    },
  };
};

/**
 * @class MailConfigurer
 * @author Colin Richardson <colin.richardson.dev@gmail.com>
 * @description A Node.js wrapper for configuring emails
 * @version 1.0.0
 * @kind class
 */
class MailConfigurer {
  constructor(mailParams, configuration) {
    this.mailParams = mailParams;
    this.configuration = configuration;
  }

  /**
   * @description handles the management of given mail parameters along with associated configuration parameters
   */
  get params() {
    return {
      /**
       * @description validates given mail parameters to the given configuration
       * @function params.validate()
       * @returns {Object}
       */
      validate: () => {
        const configParams = this.configuration.params;
        const errors = {};

        for (let configParam in configParams) {
          const configOptions = configParams[configParam];
          const mailParamValue = this.mailParams[configOptions.name];
          let error = '';

          // check for existence
          if (
            (configOptions.isRequired && mailParamValue === undefined) ||
            (configOptions.isRequired && !String(mailParamValue).length)
          ) {
            error = `${configParam} required`;
            // check custom validation
          } else if ('validation' in configOptions) {
            error = configOptions.validation(mailParamValue);
          }

          // assign error message
          if (error?.length) {
            errors[configOptions.name] = error;
          }
        }

        return errors;
      },
    };
  }

  /**
   * @description builds an email subject using a given template
   * @function buildSubject
   * @returns {String}
   */
  buildSubject() {
    return this._populateTemplate(this.configuration.templates.subject);
  }

  /**
   * @description builds an email body using a given template
   * @function buildBody
   * @returns {String}
   */
  buildBody() {
    return this._populateTemplate(this.configuration.templates.body);
  }

  /**
   * @description replace all placeholders: '{{placeholder}}' in given configuration template
   * @function _populateTemplate
   * @protected
   * @param {string} template - a template filled with values to be replaced
   * @returns {String}
   */
  _populateTemplate(template) {
    const configParamKeys = Object.keys(this.configuration.params);

    configParamKeys.forEach((param) => {
      const value = this._convertValue(
        this.mailParams[this.configuration.params[param]?.name]
      );
      template = template.replaceAll(`{{${param}}}`, value);
    });

    return template;
  }

  /**
   * @description handles conversion of mail request values to mail friendly characters
   * @function _convertValue
   * @protected
   * @param {string} value - the value to be converted
   * @returns {String}
   */
  _convertValue(value) {
    // true or false are a checkbox value, convert to unicode checked or empty checkbox
    if (value === true) {
      value = '&#x2714;';
    } else if (value === false) {
      value = '&#x25a2;';
    }

    return value;
  }
}

/**
 * @class SESMailBuilder
 * @author Colin Richardson <colin.richardson.dev@gmail.com>
 * @description A Node.js wrapper for building AWS SES mail
 * @version 1.0.0
 * @kind class
 */
class SESMailBuilder extends MailConfigurer {
  constructor(mailParams, configuration) {
    super(mailParams, configuration);
  }

  /**
   * @description Structures an AWS SES mail request
   *              https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html
   * @function buildSubject
   * @param {string} source - the sender's email (must be setup within AWS SES with a proper domain)
   * @param {array} toAddresses - list of receiving emails
   * @param {array} replyToAddresses - list of reply emails
   * @param {array} ccAddresses - list of cc emails
   * @param {string} subject - subject used for the email
   * @param {string} body - body used for the email
   * @returns {Object}
   */
  createMail({
    source,
    toAddresses,
    replyToAddresses = [],
    ccAddresses = [],
    subject,
    body,
  }) {
    // check for valid SES specific data requirements
    if (typeof source !== 'string' || !source?.length) {
      throw new MailBuilderError('Invalid SES mail Source argument.');
    }
    if (typeof subject !== 'string' || !subject?.length) {
      throw new MailBuilderError('Invalid SES mail Subject argument.');
    }
    if (typeof body !== 'string' || !body?.length) {
      throw new MailBuilderError('Invalid SES mail Body argument.');
    }
    if (!Array.isArray(toAddresses) || !toAddresses?.length) {
      throw new MailBuilderError('Invalid SES mail ToAddresses argument.');
    }
    if (!Array.isArray(replyToAddresses)) {
      throw new MailBuilderError('Invalid SES mail ReplyToAddresses argument.');
    }
    if (!Array.isArray(ccAddresses)) {
      throw new MailBuilderError('Invalid SES mail CcAddresses argument.');
    }
    // structure request object
    const mail = {
      Destination: {},
      Message: { Body: {} },
    };

    // structure addresses
    mail.Source = source;
    mail.Destination.ToAddresses = toAddresses;
    mail.Destination.CcAddresses = ccAddresses;
    mail.ReplyToAddresses = replyToAddresses;

    // structure subject
    mail.Message.Subject = {
      Charset: 'UTF-8',
      Data: subject,
    };

    // structure body
    mail.Message.Body.Html = {
      Charset: 'UTF-8',
      Data: body,
    };

    return mail;
  }
}

class MailBuilderError extends Error {
  constructor(message = 'Error occured during mail construction.', ...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MailBuilderError);
    }

    this.name = 'MailBuilderError';
    this.message = message;
    this.date = new Date();
  }
}
