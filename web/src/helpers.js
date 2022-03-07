export function searchString(string, regExpPattern) {
  try {
    if (typeof string === 'string' && string.length) {
      const regex = new RegExp(regExpPattern);
      const result = regex.exec(string);
      // first index of a RegExp.exec return value is the matched expression
      return result !== null ? result[0] : result;
    }
    // default value for unmatched RegExp.exec expression
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
