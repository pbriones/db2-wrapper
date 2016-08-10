var select = require('./query/select');
var query = require('./query/query');

module.exports.buildQuery = function(input,callback){
	if('SELECT' in input)
		select.constructSelect(input,function(err,response){
			if(err) callback(err);
			callback(null,response);
		})
	else if('UPDATE' in input)
		query.constructUpdate(input,function(err,response){
			if(err) callback(err);
			callback(null,response);
		})
	else if('INSERT' in input)
		query.constructInsert(input, function(err,response){
			if(err) callback(err);
			callback(null,response);
		})
	else
		callback(new Error("Input must include property 'SELECT','INSERT', or 'UPDATE'"));
}