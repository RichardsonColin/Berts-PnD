/*
 *
 */
exports.configurationHandler = (property) => {
  const { configurations } = require('../configurations');

  function retrieve() {
    validate();
    return configurations[property];
  }
  function validate() {
    const configuration = configurations[property];

    if (configuration === undefined)
      throw Error("Configuration doesn't exist.");
    if (!Object.keys(configuration.params).length)
      throw Error('Configuration requires params.');
    if (configuration.templates.body === undefined)
      throw Error('Configuration requires a body template.');
    if (configuration.templates.subject === undefined)
      throw Error('Configuration requires a subject template.');
  }

  return {
    retrieve,
  };
};
