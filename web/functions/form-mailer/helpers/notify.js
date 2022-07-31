const process = require('process');
// AWS
const { SendEmailCommand } = require('@aws-sdk/client-ses');
const { sesClient } = require('../../../lib/ses/client');
// helpers
const { mailBuilderHandler } = require('./mailBuilderHandler');
const { logger } = require('./logger');

// send mail to developer in case of issue
exports.notify = async (message) => {
  try {
    const mailBuilder = mailBuilderHandler({
      message,
      type: 'notify',
    }).getSESMailBuilder();
    const mail = mailBuilder.createMail({
      source: process.env.AWS_SES_SOURCE_ADDRESS,
      toAddresses: [process.env.AWS_SES_DEBUG_ADDRESS],
      subject: mailBuilder.buildSubject(),
      body: mailBuilder.buildBody(),
    });

    // send mail
    await sesClient.send(new SendEmailCommand(mail));
  } catch (err) {
    logger(err.stack, 'error');
  }
};
