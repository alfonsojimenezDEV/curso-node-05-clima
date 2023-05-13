require('dotenv').config();

const { menuPrincipal, pausa, readInput } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log(process.env); //Gracias a dotenv se cargan las variables de entorno del archivo .env
const main = async () => {
  let opt = 0;
  const busquedas = new Busquedas();

  do {
    opt = await menuPrincipal();
    switch (opt) {
      case 1:
        // Mostrar mensaje
        let lugar = await readInput('Ciudad: ');
        await busquedas.ciudad(lugar);

        // Buscar los lugares

        // Seleccionar el lugar

        // Clima

        // Mostrar resultados

        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:');
        console.log('Lat:');
        console.log('Lng:');
        console.log('Temperatura:');
        console.log('Mínima:');
        console.log('Máxima');
        break;

      default:
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
