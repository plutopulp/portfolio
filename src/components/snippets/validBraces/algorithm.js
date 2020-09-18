const complements = { "(": ")", "[": "]", "{": "}" };

const filterBraces = (string) => {
  // Filter braces from the input string
  const filteredArray = [...string].filter(
    (c) => c in complements || Object.values(complements).includes(c)
  );
  return filteredArray.join("");
};

const validBraces = (string) => {
  // Recursively eliminate adjacent valid brace pairs
  if (!string.length) return true;
  for (const [i, c] of [...string].entries()) {
    if (c in complements && string[i + 1] === complements[c]) {
      return validBraces(string.slice(0, i) + string.slice(i + 2));
    }
  }
  return false;
};

const hasValidBraces = (string) => {
  const braces = filterBraces(string);
  return validBraces(braces);
};

export { hasValidBraces };
