const process = require('process');
// AWS
const { sesClient } = require('../../lib/ses/client');
const { SendEmailCommand } = require('@aws-sdk/client-ses');
// helpers
const { mailBuilderHandler } = require('./helpers/mailBuilderHandler');
const { notify } = require('./helpers/notify');
const { logger, cacheLogger } = require('./helpers/logger');

/*
 * Form-Mailer Handler
 * Steps:
 *  - Handle request params
 *  - Establish a mailBuilder with request params that dictate by a configuration
 *  - Validate params from request
 *  - Build a mail request object using requst params (AWS SES request object)
 *  - Send mail (AWS SES)
 *  - Finish with function handler response
 */

// restrict to explicit HTTP methods
const ACCEPTED_HTTP_METHODS = ['POST'];

const handler = async (event) => {
  if (!ACCEPTED_HTTP_METHODS.includes(event.httpMethod)) {
    logger(`Incorrect request method.`, 'error');
    return buildResponseObj(400);
  }

  try {
    // handle request
    const reqBody = JSON.parse(event.body);
    const mailBuilder = mailBuilderHandler(reqBody).getSESMailBuilder();

    logger(`Validating ${reqBody?.type} request params`);

    // validate request params
    const errors = mailBuilder.params.validate();
    if (Object.keys(errors).length) {
      return buildResponseObj(400, 'Missing required information', errors);
    }

    // build mail request object
    const mail = mailBuilder.createMail({
      source: process.env.AWS_SES_SOURCE_ADDRESS,
      toAddresses: process.env.AWS_SES_TO_ADDRESSES.split(','),
      replyToAddresses: [reqBody.email],
      subject: mailBuilder.buildSubject(),
      body: mailBuilder.buildBody(),
    });

    logger(`Initiating delivery for ${reqBody.email}`);

    // send mail
    const response = await sesClient.send(new SendEmailCommand(mail));

    // log info
    await cacheLogger(
      JSON.stringify({ status: 'success', request: mail, response }),
      'success'
    );
    logger(`Mail sent successfully`);

    // send netlify function response
    return buildResponseObj(201, "We'll be in touch!");
  } catch (err) {
    // log error
    logger(err.stack, 'error');
    await cacheLogger(
      JSON.stringify({ status: 'fail', error: err.message }),
      'fail'
    );
    // send mail with error issue
    await notify(`[Mailer Error] ${err.stack}`);

    // Configuration Handler issue; Mail Builder Handler issue
    if (err.name === 'ConfigurationError' || err.name === 'MailBuilderError') {
      // send response
      return buildResponseObj(
        400,
        'Sorry, email service is temporarily unavailable.'
      );
    } else {
      // send response
      return buildResponseObj(
        500,
        'Sorry, email service is temporarily unavailable.'
      );
    }
  }
};

// structures netlify function response object
function buildResponseObj(statusCode, message = '', errors = {}) {
  if (typeof statusCode !== 'number')
    throw new Error('Response object requires a proper status code.');
  const body = {};

  // add message prop
  if (typeof message === 'string') body.message = message;

  // add errors prop
  if (Object.keys(errors).length) body.errors = errors;

  return { statusCode, body: JSON.stringify(body) };
}

module.exports = { handler };
