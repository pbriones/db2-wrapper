'use strict';

module.exports.constructInsert = function(input,cb){
	var cols = input.columns;
	var values = input.values;
	var query = "INSERT INTO " + input.table + "(";
	if(typeof cols === "undefined") throw new Error("Property 'columns' of 'input' must be defined");
	if(typeof values === "undefined") throw new Error("Property 'values' of 'input' must be defined");
	if(cols.length !== values.length) throw new Error("Properties 'columns' and 'values' of 'input' must be the same length");
	if(cols instanceof Array) query+=appendDelimitedArray(cols);
	else query+=cols;
	query+=(") VALUES(");
	if(values instanceof Array) query+=appendDelimitedArray(values);
	else query+=values;
	query+=(")");
	cb(null,{"query":query});
}

function appendDelimitedArray(arr){
	var ret = ""
	for(let i=0;i<arr.length;i++){
		ret+=arr[i];
		if(i!==arr.length-1) ret+=(",");
	}
	return ret;
}