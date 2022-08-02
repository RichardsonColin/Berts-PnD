exports.searchString = (string, regExpPattern) => {
  try {
    if (typeof string !== 'string' || !string) return null;

    const regex = new RegExp(regExpPattern);
    const result = regex.exec(string);
    // first index of a RegExp.exec return value is the matched expression
    return result !== null ? result[0] : result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

exports.isJsonString = (string) => {
  try {
    JSON.parse(string);
  } catch (err) {
    return false;
  }
  return true;
};
