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
                name: `${'2.'.green} Clima`,
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

module.exports = {
    menuPrincipal,
    pausa,
    readInput,
};
