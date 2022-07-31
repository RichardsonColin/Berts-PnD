/*
 *
 */
exports.configurationHandler = (type) => {
  const { configurations } = require('../configurations');

  function retrieve() {
    validate();
    return configurations[type];
  }
  function validate() {
    const configuration = configurations[type];

    if (configuration === undefined)
      throw new ConfigurationError("Configuration doesn't exist.");
    if (!Object.keys(configuration.params).length)
      throw new ConfigurationError('Configuration requires params.');
    if (configuration.templates.body === undefined)
      throw new ConfigurationError('Configuration requires a body template.');
    if (configuration.templates.subject === undefined)
      throw new ConfigurationError(
        'Configuration requires a subject template.'
      );
  }

  return retrieve();
};

class ConfigurationError extends Error {
  constructor(message = 'Error occured during mail configuration.', ...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConfigurationError);
    }

    this.name = 'ConfigurationError';
    this.message = message;
    this.date = new Date();
  }
}
