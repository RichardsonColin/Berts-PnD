// structure the format for basic logging
const logger = (message, type = 'info') => {
  const dateString = new Date().toISOString();

  if (type === 'info') type = '[INFO]';
  if (type === 'warning') type = '[WARN]';
  if (type === 'error') type = '[ERROR]';

  console.log(`${dateString} ${type} ${message}`);
};

module.exports = {
  logger,
};
