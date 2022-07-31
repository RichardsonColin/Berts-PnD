const { s3Client } = require('./client');
const { Upload } = require('@aws-sdk/lib-storage');
// helpers
const { isJsonString } = require('../../utils/helpers');

exports.uploadS3JsonObject = async (params) => {
  try {
    const validationErrors = validateS3JsonUpload(params);
    if (validationErrors.length) {
      return buildS3ResponseObject('fail', validationErrors);
    }
    const upload = new Upload({
      client: s3Client,
      params,
    });
    const res = await upload.done();
    return buildS3ResponseObject('success', res);
  } catch (error) {
    return buildS3ResponseObject('fail', error);
  }
};

exports.buildS3JsonUploadParams = (bucket, key, body, options = {}) => {
  const params = {
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: 'application/json; charset=utf-8',
  };

  return params;
};

const validateS3JsonUpload = ({ Bucket, Key, Body }) => {
  const errors = [];

  if (typeof Bucket !== 'string' || !Bucket?.length) {
    errors.push('S3 upload Bucket must of type String and exist.');
  }
  if (typeof Key !== 'string' || !Key?.length) {
    errors.push('S3 upload Key must be of type String and exist.');
  }
  if (!isJsonString(Body)) {
    errors.push('S3 upload Body must be proper JSON.');
  }

  return errors;
};

const buildS3ResponseObject = (status, data) => {
  const resObject = {};
  if (status === 'success') {
    resObject.message = 'S3 transaction successfully completed.';
    resObject.data = data;
  }
  if (status === 'fail') {
    resObject.message = 'S3 transaction failed.';
    resObject.errors = data;
  }

  return resObject;
};
