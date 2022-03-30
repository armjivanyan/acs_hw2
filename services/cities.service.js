const NotFoundError = require('../errors/not-found.error');
const citiesRepository = require('../repositories/cities.repository');

module.exports = {
  async getCityByZipCode(zipCode) {
    try {
      return await citiesRepository.getCityDataByZipCode(zipCode);
    } catch {
      throw new NotFoundError(`City with the given zip code was not found!`);
    }
  },
};
