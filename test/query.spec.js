'use strict';
var expect = require('chai').expect;
var query = require('../lib/query/query');

describe('query',function(){
	it('should construct a query from structured input, no aggregation',function(done){
		var input = {
			table: 'example',
			columns: ['id','x','y'],
			condition: 'x=y'
		}
		query.constructQuery(input,function(err,response){
			if(err) console.error();
			expect(err).to.be.null;
			expect(response).to.be.a('object');
			expect(response).to.have.property('query');
			console.log(response.query);
		});
	})
})