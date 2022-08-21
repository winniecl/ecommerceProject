const findMaxDuplicateChar = (string: string) => {
  let keyValue: { [key: string]: number } = {};
  const n = string.length;
  for (let i: number = 0; i < n; i++) {
    if (keyValue[string[i]]) keyValue[string[i]]++;
    else keyValue[string[i]] = 1;
  }
  let max: number = -1;
  let result: string | null = null;
  Object.keys(keyValue).forEach((key) => {
    if (keyValue[key] > max) {
      max = keyValue[key];
      result = key;
    }
  });
  console.log("====================================");
  console.log(result);
  console.log("====================================");
  return result;
};
findMaxDuplicateChar("jnpkjmspigjidsifjdiiii");
