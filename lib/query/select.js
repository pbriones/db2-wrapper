'use strict';

module.exports.constructQuery = function (input, cb) {
	var groupby = [];
	//Initialize query
	var query = 'SELECT ';
	//Append columns
	if (input.columns instanceof Array) {
		for (var i = 0; i < input.columns.length; i++) {
			var col = input.columns[i];
			if (i === input.columns.length - 1)
				query += (col + ' ');
			else
				query += (col + ', ');
			//Keep track of which columns are not aggregated
			if (!isAggregation(col))
				groupby.push(col);
		}
	}
	else query += (input.columns + ' ');
	//Append source table
	query += ('FROM ' + input.table);
	//Append conditions
	if (input.condition)
		query += (' WHERE ' + input.condition);
	//Append grouping
	if (groupby.length > 0){
		query += ' GROUP BY '
		for (var i = 0; i < groupby.length; i++) {
			if (i === groupby.length - 1)
				query += groupby[i];
			else
				query += groupby[i] + ', ';
		}
	}
	cb(null, {'query': query });
}

function isAggregation(str) {
	if (str.indexOf('(') > 0) return true;
	return false;
}