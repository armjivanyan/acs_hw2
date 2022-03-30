const axios = require('axios');

module.exports = {
  async getCityDataByZipCode(zipCode) {
    let info = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
    const details = info.data['places'][0];
    return `${details['place name']}, ${details['state abbreviation']}, ${info.data['country']}`;
  },
};
