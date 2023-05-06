const axios = require('axios');

class Busquedas {
    historial = ['Madrid', 'Lucena', 'París'];

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        // petición http
        //console.log('Ciudad escrita: ', lugar)
        try {
            const instance = axios.create({
                baseURL: `https://api.maptiler.com/geocoding/ ${lugar}.json`,
            });
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            //return []; //retornar un array con los lugares que coincidan con lugar.
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;
