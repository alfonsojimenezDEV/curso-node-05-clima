const inquirer = require('inquirer');
require('colors');

const opciones = [
  {
    type: 'list',
    name: 'opt',
    message: 'Opción:',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Buscar ciudad`,
      },
      {
        value: 2,
        name: `${'2.'.green} Historial`,
      },
      {
        value: 0,
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];
const menuPrincipal = async () => {
  console.clear();

  console.log('=================================='.green);
  console.log('Seleccione una opción'.white);
  console.log('==================================\n'.green);

  const { opt } = await inquirer.prompt(opciones);
  return opt;
};

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'opt',
      message: `Presione ${'ENTER'.green} para continuar`,
    },
  ];
  console.log('\n');
  const { opt } = await inquirer.prompt(question);
  return opt;
};

const readInput = async (message = '') => {
  const question = [
    {
      type: 'input',
      name: 'value',
      message,
    },
  ];
  const { value } = await inquirer.prompt(question);
  return value;
};

const listadoLugares = async (lugares = []) => {
  const choices = lugares.map((lugar, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: lugar.id,
      name: `${idx} ${lugar.nombre}`,
    };
  });
  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione lugar',
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

module.exports = {
  menuPrincipal,
  pausa,
  readInput,
  listadoLugares,
};
