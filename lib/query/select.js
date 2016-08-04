'use strict';

module.exports.generateQuery = function (input, cb) {
	var query = 'SELECT ';
	for (var i = 0; i < input.columns.length; i++){
		var col = input.columns[i];
		if(!isAggregation(col)){
			query.append(col + ', ');
		}
	}
	query.append('FROM ' + input.table);
	if(input.condition)
		query.append(' WHERE ' + condition);
	cb(err,{'query':query});
}

module.exports.generateQuery = function (input, cb) {
	var query = 'SELECT camera FROM ' + input.name + 'where' 
	for (var i = 0; i < input.columns.length; i++){
		var col = input.columns[i];
		if(!isAggregation(col)){
			query.append(col + ', ');
		}
	}
	query.append('FROM ' + input.table);
	if(input.condition)
		query.append(' WHERE ' + condition);
	cb(err,{'query':query});
}