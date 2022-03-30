const rewire = require('rewire');
const citiesRepository = rewire('../repositories/cities.repository');
const axios = require('axios');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

// chai.use(chaiAsPromised);
// chai.should();

describe('Testing cities.repository.js', function () {
  describe('Testing getCityDataByZipCode()', function () {
    const stubbedAxiosGet = sinon.stub(axios, 'get').withArgs('https://api.zippopotam.us/us/94122').resolves({
      data: `{"post code": "94122", "country": "United States", "country abbreviation": "US", "places": [{"place name": "San Francisco", "longitude": "-122.4836", "state": "California", "state abbreviation": "CA", "latitude": "37.7593"}]}`,
    });
    citiesRepository.__set__('info', stubbedAxiosGet);
    it('returns data correctly', function () {
      citiesRepository.getCityDataByZipCode('94122').should.eventually.be.equal('San Francisco, CA, United States');
    });
    it('was called only once', function () {
      chai.expect(sinon.assert.calledOnce(axios.get));
    });
  });
});
