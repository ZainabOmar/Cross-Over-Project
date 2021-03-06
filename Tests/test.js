const app = require('../code/CrossOver-Project/server/server.js');
const request = require('supertest');
const expect = require('chai').expect;

describe('add-donor', function () {
  it('it should add new donor', function (done) {
    request(app)
    .post('/api/postDonor')
    .send({
      firstName: 'zainab',
      lastName: 'hammami',
      email: 'dodo@zak.com',
      contactNumber: '123456789',
      bloodGroup: "AB+",
      address: "somewhere",
      geoC: "31.76767574, 35.86868009"
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object')
      done()
    })
  })

  it('It should Get all the donors', function (done) {
    request(app)
    .get('/api/getDonors')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object')
    })
    done()
  })
});
