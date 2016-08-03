'use strict';
var expect = require('chai').expect;
var validate = require('../lib/validate-credentials');
let valid, nouser, nohost, nodb, invalid;
before(function () {
  let input = {
    username: 'user',
    hostname: 'host',
    db: 'db'
  }
  valid = validate(input);
  delete input.username;
  nouser = validate(input);
  input.username = 'user';
  delete input.hostname;
  nohost = validate(input);
  input.hostname = 'host';
  delete input.db;
  nodb = validate(input);
  input = {};
  invalid = validate(input);
})

describe('validate', function () {
  it('should have errors without one or more of username, hostname and db', function () {
    expect(invalid).to.have.property('errors').with.length(3);
    expect(nouser).to.have.property('errors').with.length(1);
    expect(nohost).to.have.property('errors').with.length(1);
    expect(nodb).to.have.property('errors').with.length(1);
  })
  it('should have no errors with username, hostname and db', function () {
    expect(valid).to.be.null;
  })
})