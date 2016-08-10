var select = require('./query/select');
var query = require('./query/query');

module.exports.buildQuery = function(input,callback){
	if('SELECT' in input)
		select.constructSelect(input,function(err,response){
			if(err) callback(err);
			callback(null,response);
		})
	else
		callback(null,'shit');
}