'use strict';
var helper = require('../query-helper');

module.exports.constructInsert = function (input, cb) {
	var set = {type: 'INSERT INTO', clause:'(', operator:' VALUES'};
	input.set = set;
	helper.querySetup(input,function(err,response){
		if(err) cb(err);
		cb(null,{"query":response.query})
	})
}

module.exports.constructUpdate = function (input, cb) {
	var set = { type: 'UPDATE', clause:' SET(', operator:'=' };
	var query;
	input.set = set;
	helper.querySetup(input, function (err, response) {
		if (err) cb(err);
		query = response.query;
		if (input.condition) query += ' WHERE ' + input.condition;
		cb(null, { 'query': query });
	})
}