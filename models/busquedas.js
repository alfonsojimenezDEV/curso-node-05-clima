const axios = require('axios');
const maptilerClient = require('@maptiler/client');

class Busquedas {
  historial = ['Madrid', 'Lucena', 'París'];

  constructor() {
    // TODO: leer DB si existe
  }

  get paramsMaptiler() {
    return {
      key: process.env.MAPTILER_KEY,
      language: 'es',
      limit: 5,
    };
  }

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER,
      lang: 'es',
      units: 'metric',
    };
  }

  async ciudad(lugar = '') {
    //maptilerClient.config.apiKey = '';

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
        params: this.paramsMaptiler,
      });
      const resp = await instance.get();
      //console.log(resp.data.features);
      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
      //return []; //retornar un array con los lugares que coincidan con lugar.
    } catch (error) {
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      // Instancia de axios.create()
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/forecast/`,
        params: { ...this.paramsWeather, lat, lon },
      });
      // resp.data
      const resp = await instance.get();
      //console.log(resp.data);
      const { list } = resp.data;
      // console.log(list[0]);s

      return list.map((el) => ({
        fec: new Date(el.dt),
        temp: el.main.temp,
        min: el.main.temp_min,
        max: el.main.temp_max,
        desc: el.weather[0]['description'],
      }));

      // return {
      //   desc: '',
      //   min: '',
      //   max: '',
      //   temp: '',
      // };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Busquedas;
