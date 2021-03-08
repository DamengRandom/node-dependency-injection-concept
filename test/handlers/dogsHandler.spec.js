'use strict'

const supertest = require('supertest');
const resetCache = require('resnap')();
const server = require('../../src/server');

describe('test route /dogs', () => {
  let request;
  let axios;

  before(() => {
    const app = server(axios); // we can mock this DI below DI
    request = supertest.agent(app);
  });

  beforeEach(resetCache);

  it('should return a 200', (done) => {
    axios = { // mock DI axios library from index.js level
      get: function() {
        return Promise.resolve({ data: {
          "message": "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg",
          "status": "success"
        }});
      }
    };

    request.get('/dogs').expect(200);
    done();
  });

  it('should return a 500', (done) => {
    axios = { // mock DI axios library from index.js level
      get: function() {
        return Promise.reject({ error: 'Oops, data is not available at moment ..' });
      }
    }

    request.get('/dogs').expect(500);
    done();
  });
});
