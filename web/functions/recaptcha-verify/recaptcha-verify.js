const process = require('process');
const axios = require('axios').default;

// restrict to explicit HTTP methods
const ACCEPTED_HTTP_METHODS = ['POST'];

const handler = async (event) => {
  if (!ACCEPTED_HTTP_METHODS.includes(event.httpMethod)) {
    logger(`Incorrect request method.`, 'error');
    return { statusCode: 400 };
  }
  try {
    const { token } = JSON.parse(event.body);
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env['RECAPTCHA_SECRET_KEY']}&response=${token}`;

    // sends secret key and response token to google
    const response = await axios.post(url);
    const { success } = response.data;

    // check response status and send back to the client-side
    return { statusCode: 200, body: JSON.stringify({ success }) };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { handler };
