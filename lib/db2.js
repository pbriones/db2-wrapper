'use strict';
var db = require('ibm_db');
var serviceCreds = require('service-credentials');
var validate = require('./validate-credentials');
var creds;

function generateCredentialString(input){
  var connection = 
    'DRIVER={DB2};' +
    'DATABASE=' + input.db + ';' +
    'HOSTNAME=' + input.hostname + ';' +
    'UID=' + input.username + ';' +
    'PWD=' + input.password + ';' +
    'PORT=' + input.port + ';';
  if(input.protocol){
    connection += 'PROTOCOL=' + input.protocol;
  }
  return connection;
}
function DB2(credentials){
  creds = serviceCreds.getCredentials(credentials);
  var errors = validate(creds);
  if(errors){
     throw new Error(errors);
  }
  creds = generateCredentialString(creds);
}
//decouple open later
DB2.prototype.query = function(query, cb){
  db.open(creds, function(err, conn){
    if(err) return cb(err);
    conn.query(query, function(err, data){
      if(err) return cb(err);
      cb(null, data);
      conn.close();
    })
  })
}

module.exports = DB2;