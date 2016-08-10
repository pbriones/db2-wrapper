'use strict';
var helper = require('../query-helper');

module.exports.constructSelect = function (input, cb) {
	//check input
	if (typeof input.SELECT === "undefined") throw new Error("Property 'SELECT' of 'input' must be defined");
	if (typeof input.FROM === "undefined") throw new Error("Property 'FROM' of 'input' must be defined");
	var groupby = [];
	//Initialize query
	var query = 'SELECT ';
	//Append columns
	if (input.SELECT instanceof Array) {
		for (var i = 0; i < input.SELECT.length; i++) {
			var col = input.SELECT[i];
			query += col;
			if (i !== input.SELECT.length - 1) query += ','
			//Group by everything that is NOT an aggr
			if (!helper.isAggregation(col))
				groupby.push(col);
		}
	}
	else query += (input.SELECT);
	query += ' ';
	//Append source table
	query += ('FROM ' + input.FROM);
	//Append conditions
	if (input.WHERE)
		query += (' WHERE ' + input.WHERE);
	//Append grouping
	if (groupby.length > 0) {
		query += ' GROUP BY '
		query += helper.appendDelimitedArray(groupby);
	}
	cb(null, { 'query': query });
}