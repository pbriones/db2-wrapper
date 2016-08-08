'use strict';
var helper = require('../query-helper');

module.exports.constructQuery = function (input, cb) {
	//check input
	if (typeof input.columns === "undefined") throw new Error("Property 'columns' of 'input' must be defined");
	if (typeof input.table === "undefined") throw new Error("Property 'table' of 'input' must be defined");
	var groupby = [];
	//Initialize query
	var query = 'SELECT ';
	//Append columns
	if (input.columns instanceof Array) {
		for (var i = 0; i < input.columns.length; i++) {
			var col = input.columns[i];
			query += col;
			if (i !== input.columns.length - 1) query += ','
			//Group by everything that is NOT an aggr
			if (!helper.isAggregation(col))
				groupby.push(col);
		}
	}
	else query += (input.columns);
	query += ' ';
	//Append source table
	query += ('FROM ' + input.table);
	//Append conditions
	if (input.condition)
		query += (' WHERE ' + input.condition);
	//Append grouping
	if (groupby.length > 0) {
		query += ' GROUP BY '
		query += helper.appendDelimitedArray(groupby);
	}
	cb(null, { 'query': query });
}