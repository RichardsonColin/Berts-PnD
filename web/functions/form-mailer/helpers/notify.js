const process = require('process');
// AWS
const { SendEmailCommand } = require('@aws-sdk/client-ses');
const { sesClient } = require('../lib/aws/sesClient');
// helpers
const { mailBuilder } = require('./mailBuilder');
const { logger } = require('./logger');

// send mail to developer in case of issue
exports.notify = async (message) => {
  try {
    const notifyMailBuilder = mailBuilder({ message, type: 'notify' });
    const request = notifyMailBuilder.buildMailRequest({
      source: process.env.AWS_SES_SOURCE_ADDRESS,
      toAddresses: [process.env.AWS_SES_DEBUG_ADDRESS],
      subject: notifyMailBuilder.buildSubject(),
      body: notifyMailBuilder.buildBody(),
    });

    // send mail
    await sesClient.send(new SendEmailCommand(request));
  } catch (err) {
    logger(err.stack, 'error');
  }
};
