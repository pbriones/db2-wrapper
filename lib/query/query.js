'use strict';
var helper = require('../query-helper');

module.exports.constructInsert = function (input, cb) {
	var set = {type: 'INSERT INTO', clause:'(', operator:' VALUES'};
	input.columns = input.INSERT;
	input.set = set;
	helper.querySetup(input,function(err,response){
		if(err) cb(err);
		cb(null,response)
	})
}

module.exports.constructUpdate = function (input, cb) {
	var set = { type: 'UPDATE', clause:' SET(', operator:'=' };
	input.columns = input.UPDATE;
	var query;
	input.set = set;
	helper.querySetup(input, function (err, response) {
		if (err) cb(err);
		if (input.WHERE) response += ' WHERE ' + input.WHERE;
		cb(null,response);
	})
}