const process = require('process');
// AWS
const { SendEmailCommand } = require('@aws-sdk/client-ses');
const { sesClient } = require('./lib/aws/sesClient.js');
// helpers
const {
  buildMailBody,
  buildMailSubject,
  buildMailRequest,
  validateMailParams,
} = require('./mailHelpers');
const { logger } = require('./logger');
const { notify } = require('./notify');
// constants
const {
  ACCEPTED_HTTP_METHODS,
  FORM_EMAIL_INPUT_KEY,
  FORM_NAME_INPUT_KEY,
  FORM_DETAILS_INPUT_KEY,
  FORM_TYPE_INPUT_KEY,
} = require('./constants');

const handler = async (event) => {
  if (!ACCEPTED_HTTP_METHODS.includes(event.httpMethod)) {
    logger(`Incorrect request method.`, 'error');
    return { statusCode: 400, body: buildResponseObj() };
  }

  try {
    // Handle request
    const reqBody = JSON.parse(event.body);
    const mailParams = {
      email: reqBody[FORM_EMAIL_INPUT_KEY],
      name: reqBody[FORM_NAME_INPUT_KEY],
      details: reqBody[FORM_DETAILS_INPUT_KEY],
      type: reqBody[FORM_TYPE_INPUT_KEY],
    };

    logger(`Validating request params`);

    // Validate request params
    const errors = validateMailParams(mailParams);
    if (Object.keys(errors).length) {
      return {
        statusCode: 400,
        body: buildResponseObj('Invalid Params', errors),
      };
    }

    // Structure mail
    const mailDetails = {
      source: process.env.AWS_SES_SOURCE_ADDRESS,
      toAddresses: process.env.AWS_SES_TO_ADDRESSES.split(','),
      replyToAddresses: [mailParams.email],
      subject: buildMailSubject(mailParams),
      body: buildMailBody(mailParams),
    };
    const mailRequest = buildMailRequest(mailDetails);

    logger(`Initiating delivery for: ${mailParams.email}`);

    // send mail
    const response = await sesClient.send(new SendEmailCommand(mailRequest));

    logger(`Mail sent successfully: ${response}`);

    return { statusCode: 201, body: buildResponseObj('Success') };
  } catch (err) {
    logger(`${err}`, 'error');
    await notify(`[Mailer Error] ${err}`);
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
