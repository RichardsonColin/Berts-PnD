const { configurationHandler } = require('./configurationHandler');

/*
 * Closure to handle parameters from a form/data request for the purposes of
 * using them within an email:
 * - consumes a configuration that's modeled after the form parameters along
 *   with templates for a subject and a body
 * - validations ensure the form data meets the configuartion's specs
 * - builds a mail request object (currently coupled an AWS SES request object)
 */
exports.mailBuilder = (mailParams) => {
  const configuration = configurationHandler(mailParams.type).retrieve();

  /*
   * - Existence: simply checks its required flag
   *   against an undefined value or coerces into a string to ensure a value
   *   has been entered.
   * - Validation: optional configurable custom validation
   * - Currently doesn't check for type.
   */
  function validateParams() {
    const configParams = configuration.params;
    const errors = {};

    for (let configParam in configParams) {
      const configOptions = configParams[configParam];
      const mailParamValue = mailParams[configOptions.name];
      let error;

      // check for existence
      if (
        (configOptions.isRequired && mailParamValue === undefined) ||
        (configOptions.isRequired && !String(mailParamValue).length)
      ) {
        error = `${configParam} is required.`;
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
  }

  /*
   * Structures an AWS SES mail request body
   * https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html
   *
   * In the case that more mail delivery services are required, this
   * functionality could be isolated into its own class/closure along
   * with other classes/closures per service, to then be utilized by the
   * mailBuilder.
   */
  function buildMailRequest({
    source,
    toAddresses,
    replyToAddresses = [],
    ccAddresses = [],
    subject,
    body,
  }) {
    // check for valid SES specific data requirements
    if (typeof source !== 'string' || !source?.length) {
      throw new Error('Invalid SES mail Source argument.');
    }
    if (typeof subject !== 'string' || !subject?.length) {
      throw new Error('Invalid SES mail Subject argument.');
    }
    if (typeof body !== 'string' || !body?.length) {
      throw new Error('Invalid SES mail Body argument.');
    }
    if (!Array.isArray(toAddresses) || !toAddresses?.length) {
      throw new Error('Invalid SES mail ToAddresses argument.');
    }
    if (!Array.isArray(replyToAddresses)) {
      throw new Error('Invalid SES mail ReplyToAddresses argument.');
    }
    if (!Array.isArray(ccAddresses)) {
      throw new Error('Invalid SES mail CcAddresses argument.');
    }
    // structure request object
    const mailRequest = {
      Destination: {},
      Message: { Body: {} },
    };

    // build addresses
    mailRequest.Source = source;
    mailRequest.Destination.ToAddresses = toAddresses;
    mailRequest.Destination.CcAddresses = ccAddresses;
    mailRequest.ReplyToAddresses = replyToAddresses;

    // build subject
    mailRequest.Message.Subject = {
      Charset: 'UTF-8',
      Data: subject,
    };

    // build body
    mailRequest.Message.Body.Html = {
      Charset: 'UTF-8',
      Data: body,
    };

    return mailRequest;
  }

  function buildSubject() {
    return populateMailTemplate(configuration.templates.subject);
  }

  function buildBody() {
    return populateMailTemplate(configuration.templates.body);
  }

  /*
   * replace all placeholders: '{{placeholder}}' in given configuration template
   * with mail request parameter values.
   */
  function populateMailTemplate(template) {
    const configParamKeys = Object.keys(configuration.params);

    configParamKeys.forEach(
      (param) =>
        (template = template.replaceAll(
          `{{${param}}}`,
          mailParams[configuration.params[param]?.name]
        ))
    );

    return template;
  }

  return {
    validateParams,
    buildSubject,
    buildBody,
    buildMailRequest,
  };
};
