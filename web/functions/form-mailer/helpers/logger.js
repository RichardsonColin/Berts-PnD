const {
  uploadS3JsonObject,
  buildS3JsonUploadParams,
} = require('../../../lib/s3/helpers');

// structure the format for basic logging
exports.logger = (message, type = 'info') => {
  const dateString = new Date().toISOString();

  if (type === 'info') type = '[INFO]';
  if (type === 'warning') type = '[WARN]';
  if (type === 'error') type = '[ERROR]';

  console.log(`${dateString} ${type} ${message}`);
};

exports.cacheLogger = async (json, type) => {
  const params = buildS3JsonUploadParams(
    process.env.AWS_LOGS_BUCKET,
    `logs-mail/${new Date().getTime()}-${type}.json`,
    json
  );
  const result = await uploadS3JsonObject(params);
  this.logger(result?.message);
};
