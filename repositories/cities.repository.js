const axios = require('axios');
let info;
module.exports = {
  async getCityDataByZipCode(zipCode) {
    info = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
    const details = info.data['places'][0];
    return `${details['place name']}, ${details['state abbreviation']}, ${info.data['country']}`;
  },
};
