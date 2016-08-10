'use strict';
let expect = require('chai').expect;
let DB2 = require('../lib/db2');
let db2;
before(function () {
  db2 = new DB2({
    db: 'SAMPLE',
    hostname: 'localhost',
    port: 50000,
    username: 'db2admin',
    password: 'Password1234'
  })
})
describe('db2', function () {
  this.timeout(10000);
  it('.constructor', function () {
    expect(db2).to.be.an('object');
    console.log(db2);
  })
  it('.query', function(done){
    db2.query('select * from db2admin.ACT', (err, result)=>{
      console.log(result)
      expect(err).to.be.null;
      expect(result).to.be.an('array').with.length(1);
      expect(result[0]).to.have.property('ACTNO', 10);
      expect(result[0]).to.have.property('ACTKWD', 'MANAGE');
      expect(result[0]).to.have.property('ACTDESC', 'MANAGE/ADVISE');
      done();
    })
  })
})
