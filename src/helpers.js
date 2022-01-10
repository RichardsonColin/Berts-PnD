export function searchString(string, pattern) {
  try {
    const regex = new RegExp(pattern);
    const result = regex.exec(string);
    return result !== null ? result[0] : result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
