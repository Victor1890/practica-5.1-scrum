const AgeCal = require("../function/Age");
const isPrimo = require("../function/isPrimo");
const Salario = require("../function/salario");

//Pruebas erroneas
test("isPrimo retorna true al introducir 2 al input", () => {
  expect(isPrimo(49)).toBe(true);
});

test("AgeCal retorna mi edad al introducir mi fecha de nacimiento", () => {
  expect(AgeCal("09/07/1999")).toBe(21);
});

test("Aplicando impuesto por el tipo de salario bruto", () => {
  expect(Salario(0)).toBe(83.2442);
});
