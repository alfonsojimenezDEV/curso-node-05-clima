require('dotenv').config();

const {
  menuPrincipal,
  pausa,
  readInput,
  listadoLugares,
} = require('./helpers/inquirer');
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
        let lugarBuscar = await readInput('Ciudad: ');

        // Buscar los lugares
        const lugares = await busquedas.ciudad(lugarBuscar);
        // console.log(lugares);
        // Seleccionar el lugar
        const id = await listadoLugares(lugares);
        //console.log({ id });

        const lugarSel = lugares.find((l) => l.id === id);
        //console.log(lugarSel);
        // Clima

        const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
        console.log(clima);
        // Mostrar resultados

        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', lugarSel.nombre);
        console.log('Lat:', lugarSel.lat);
        console.log('Lng:', lugarSel.lng);
        console.log('Temperatura:');
        console.log('Mínima:');
        console.log('Máxima');
        console.log('Cómo está el clima:');
        break;

      default:
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
