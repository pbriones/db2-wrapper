'use strict';
var expect = require('chai').expect;
var select = require('../lib/query/select');

describe('select',function(){
	it('should construct a query with no aggregation',function(done){
		let input = {
			FROM: 'example',
			SELECT: 'id',
			WHERE: 'x=y'
		}
		select.constructQuery(input,function(err,response){
			if(err) console.error();
			expect(err).to.be.null;
			console.log(response);
			expect(response).to.be.equal('SELECT id FROM example WHERE x=y')
			done();
		});
	}),
	it('should construct a query with aggregation',function(done){
		let input = {
			FROM: 'example',
			SELECT: ['id','SUM(x,y,z)','w']
		}
		select.constructQuery(input,function(err,response){
			if(err) console.error();
			expect(err).to.be.null;
			console.log(response);
			expect(response).to.be.equal('SELECT id,SUM(x,y,z),w FROM example GROUP BY id,w');
			done();
		})
	})
})