const Salario = (num) => {
  let salario = 0;
  console.log(`El monto total es de ${num}`);

  if (num == 0) return 0;

  if (num <= 416.22) {
    console.log(`Monto exento`);
    return;
  }
  if (num < 416.221 || num > 624.329) {
    console.log(`Aplicando el 15% de excedentes`);
    salario = 0.15 * num;
  }

  if (num >= 624.33 || num <= 867.123) {
    console.log(`Aplicando el 20% de excedentes`);
    salario = 0.2 * num;
  }

  if (num >= 867.124) {
    console.log(`Aplicando el 25% de excedentes`);
    salario = 0.25 * num;
  }

  return salario;
};

console.log(Salario(416.221));

module.exports = Salario;
