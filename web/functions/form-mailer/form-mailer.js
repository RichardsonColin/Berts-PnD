const process = require('process');
// AWS
const { SendEmailCommand } = require('@aws-sdk/client-ses');
const { sesClient } = require('./lib/aws/sesClient');
// helpers
const { mailBuilder } = require('./helpers/mailBuilder');
const { notify } = require('./helpers/notify');
const { logger } = require('./helpers/logger');

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
    return { statusCode: 400, body: buildResponseObj() };
  }

  try {
    // handle request
    const reqBody = JSON.parse(event.body);
    const SESMailBuilder = mailBuilder(reqBody);

    logger(`Validating request params`);

    // validate request params
    const errors = SESMailBuilder.validateParams();
    if (Object.keys(errors).length) {
      return {
        statusCode: 400,
        body: buildResponseObj('Invalid params', errors),
      };
    }

    // build mail request object
    const mailRequest = SESMailBuilder.buildMailRequest({
      source: process.env.AWS_SES_SOURCE_ADDRESS,
      toAddresses: process.env.AWS_SES_TO_ADDRESSES.split(','),
      replyToAddresses: [reqBody.email],
      subject: SESMailBuilder.buildSubject(),
      body: SESMailBuilder.buildBody(),
    });

    logger(`Initiating delivery for ${reqBody.email}`);

    // send mail
    const response = await sesClient.send(new SendEmailCommand(mailRequest));

    // TODO: log mailRequest and response in S3 bucket

    logger(`Mail sent successfully`);

    // send netlify function response
    return { statusCode: 201, body: buildResponseObj('Success') };
  } catch (err) {
    logger(err.stack, 'error');
    // TODO: log error S3 bucket
    await notify(`[Mailer Error] ${err.stack}`);
    return { statusCode: 500, body: buildResponseObj('Error') };
  }
};

// structures netlify function response object
function buildResponseObj(message = '', errors = {}) {
  const response = {};

  // add message prop
  if (typeof message === 'string') response.message = message;

  // add errors prop
  if (Object.keys(errors).length) response.errors = errors;

  return JSON.stringify(response);
}

module.exports = { handler };
