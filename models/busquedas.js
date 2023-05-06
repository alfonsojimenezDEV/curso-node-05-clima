const axios = require('axios');
const maptilerClient = require('@maptiler/client');

class Busquedas {
    historial = ['Madrid', 'Lucena', 'París'];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        maptilerClient.config.apiKey = 'Gmp3jysz1OHeA0E8iEez';

        // petición http
        //console.log('Ciudad escrita: ', lugar)
        try {
            //UTILIZANDO LA PROPIA LIBRERÍA DE MAPTILER
            // const result = await maptilerClient.geocoding.forward(`${lugar}`, {
            //     language: maptilerClient.geocoding.language.SPANISH,
            // });
            // result.features.forEach((e) => {
            //     console.log(e.place_name, e.center);
            // });

            const instance = axios.create({
                baseURL: `https://api.maptiler.com/geocoding/ ${lugar}.json`,
                params: {
                    key: 'Gmp3jysz1OHeA0E8iEez',
                    language: 'es',
                    limit: 5,
                },
            });
            const resp = await instance.get();
            console.log(resp.data);
            // const resp = await axios.get('');
            // console.log(resp.data);
            //return []; //retornar un array con los lugares que coincidan con lugar.
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;
