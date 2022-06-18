const process = require('process');
// AWS
const { SendEmailCommand } = require('@aws-sdk/client-ses');
const { sesClient } = require('./lib/aws/sesClient.js');
// helpers
const { buildMailRequest } = require('./mailHelpers');
const { logger } = require('./logger');

// send mail to developer in case of issue
exports.notify = async (msg) => {
  try {
    const request = buildMailRequest({
      source: process.env.AWS_SES_SOURCE_ADDRESS,
      toAddresses: [process.env.AWS_SES_DEBUG_ADDRESS],
      subject: `Mailer Notification`,
      body: `<h2>Notification</h2><blockquote>${msg}</blockquote>`,
    });

    // send mail
    await sesClient.send(new SendEmailCommand(request));
  } catch (err) {
    logger(err, 'error');
  }
};
