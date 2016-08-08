'use strict'

module.exports.isAggregation = function (str) {
	if (str.indexOf('(') > 0) return true;
	return false;
}

module.exports.appendDelimitedArray = function(arr){
	var ret = ""
	for(let i=0;i<arr.length;i++){
		ret+=arr[i];
		if(i!==arr.length-1) ret+=(",");
	}
	return ret;
}

module.exports.querySetup = function(input, cb) {
	if (typeof input.table === "undefined") throw new Error("Property 'table' of 'input' must be defined");
	if (typeof input.columns === "undefined") throw new Error("Property 'columns' of 'input' must be defined");
	if (typeof input.values === "undefined") throw new Error("Property 'values' of 'input' must be defined");
	if (input.columns.length !== input.values.length) throw new Error("Properties 'columns' and 'values' of 'input' must be the same length");
	var cols = input.columns;
	var values = input.values;
	var query = input.set.type + ' ' + input.table + input.set.clause;
	if (cols instanceof Array) query += this.appendDelimitedArray(cols);
	else query += cols;
	query += ")" + input.set.operator + "(";
	if (values instanceof Array) query += this.appendDelimitedArray(values);
	else query += values;
	query += ')';
	cb(null, { "query": query })
}