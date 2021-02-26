const isPrimo = (num) => {
  if (num == 0 || num == 1 || num == 4) return false;

  for (let i = 2; i < num / 2; i++) if (num % i == 0) return false;

  return true;
};

console.log(`${isPrimo(49)}`);

module.exports = isPrimo;
