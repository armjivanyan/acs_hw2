const rewire = require('rewire');
const citiesService = rewire('../services/cities.service');
const citiesRepository = require('../repositories/cities.repository');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const faker = require('faker');

chai.use(chaiAsPromised);
chai.should();

describe('Testing cities.service.js', function () {
  describe('Testing getCityByZipCode()', function () {
    const stubbedCitiesRepository = sinon.stub(citiesRepository, 'getCityDataByZipCode').withArgs('94122').returns('San Francisco, CA, United States');
    citiesService.__set__('citiesRepository', stubbedCitiesRepository);
    it('testing zip code 94122', function () {
      chai.expect(citiesService.getCityByZipCode(94122)).to.eventually.be.equal('San Francisco, CA, United States');
    });
    it('testing fake zip code', function () {
      chai.expect(citiesService.getCityByZipCode(faker.address.zipCode())).to.eventually.be.rejectedWith(`City with the given zip code was not found!`);
    });
  });
});
