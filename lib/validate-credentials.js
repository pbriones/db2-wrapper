'use strict';
function validate(input){
  var msg = [];
  if(!input.hostname){
    msg.push('missing hostname');
  }
  if(!input.username){
    msg.push('missing username');
  }
  if(!input.db){
    msg.push('missing db');
  }
  if(msg.length === 0){
    return null;
  }
  return {errors: msg};
}

module.exports = validate;