const process = require('process');
const { SESClient } = require('@aws-sdk/client-ses');

// Create SES service object.
exports.sesClient = new SESClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
