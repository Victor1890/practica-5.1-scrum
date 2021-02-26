const inquirer = require("inquirer");
const answers = require("./services/answers.json");
const jsonPrimo = require("./services/primo.json");
const jsonAge = require("./services/Age.json");
const jsonSalario = require("./services/salario.json");

const AgeCal = require("./function/Age");
const isPrimo = require("./function/isPrimo");
const salario = require("./function/salario");

inquirer.prompt(answers).then(({ options }) => {
  answersOptions(options);
});

const answersOptions = (options) => {
  switch (options) {
    case "Primo":
      inquirer.prompt(jsonPrimo).then((answers) => {
        const { num } = answers;
        console.log(`¿${num} es primo? ${isPrimo(num)}`);
      });
      break;

    case "Edad":
      inquirer
        .prompt(jsonAge)
        .then((answers) =>
          console.log(`Usted tiene ${AgeCal(answers.Edad)} de edad.`),
        );
      break;

    case "Salario":
      inquirer.prompt(jsonSalario).then((answers) => {
        const { Salario } = answers;
        console.log(
          `Salario ingresado ${Salario} aplicando los % ${salario(Salario)}`,
        );
      });
      break;

    default:
      break;
  }
};
