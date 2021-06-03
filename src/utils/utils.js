function declOfNum(n, textForm) {
  // eslint-disable-next-line no-param-reassign
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForm[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForm[1];
  }
  if (n1 === 1) {
    return textForm[0];
  }
  return textForm[2];
}

export default declOfNum;
