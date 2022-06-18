// constants
const {
  FORM_EMAIL_INPUT_KEY,
  FORM_NAME_INPUT_KEY,
  FORM_DETAILS_INPUT_KEY,
} = require('./constants');

// structure basic HTML mail body
const buildMailBody = (mailParams) => {
  const { name, email, details, type } = mailParams;
  switch (type) {
    case 'quote':
      return `<h3>Quote Request From ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Original message:</strong></p>
        <blockquote>${details}</blockquote>`;
    case 'contact':
      return `<h3>Inquiry From ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Original message:</strong></p>
        <blockquote>${details}</blockquote>`;
    default:
      return '';
  }
};

// structure mail subject
const buildMailSubject = (mailParams) => {
  const { name, type } = mailParams;
  switch (type) {
    case 'quote':
      return `Website Quote From ${name}!`;
    case 'contact':
      return `Website Inquiry From ${name}!`;
    default:
      return '';
  }
};

// structure AWS SES mail object
const buildMailRequest = ({
  source,
  toAddresses,
  replyToAddresses = [],
  ccAddresses = [],
  subject,
  body,
}) => {
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
};

const validateMailParams = (params) => {
  const { name, email, details } = params;
  const errors = {};

  // name
  if (!String(name).trim()) {
    errors[FORM_NAME_INPUT_KEY] = 'Name is required.';
  }

  // details
  if (!String(details).trim()) {
    errors[FORM_DETAILS_INPUT_KEY] = 'Details are required.';
  }

  // email
  if (
    !/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/.test(
      String(email)
    )
  ) {
    errors[FORM_EMAIL_INPUT_KEY] = 'Email is not valid.';
  }
  if (!String(email).trim()) {
    errors[FORM_EMAIL_INPUT_KEY] = 'Email is required.';
  }

  return errors;
};

module.exports = {
  buildMailBody,
  buildMailSubject,
  buildMailRequest,
  validateMailParams,
};
