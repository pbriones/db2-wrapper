'use strict';
var expect = require('chai').expect;
var select = require('../lib/query/select');

var builder = require('../lib/query-builder');

describe.only('query-builder',function(){
	it('should construct select',function(done){
		let input = {
			FROM: 'example',
			SELECT: 'id',
			WHERE: 'x=y'
		}
		builder.buildQuery(input,function(err,response){
			if(err) console.error();
			expect(response.query).to.be.equal('SELECT id FROM example WHERE x=y');
			console.log(response);
			done();
		})
	})
	it('should construct update',function(done){
		let input = {
			UPDATE: ['col1','col2','col3'],
			values: ['val1','val2','val3'],
			FROM: 'example',
			WHERE: 'x=y' 
		}
		builder.buildQuery(input,function(err,response){
			if(err) console.error();
			expect(response.query).to.be.equal('UPDATE example SET(col1,col2,col3)=(val1,val2,val3) WHERE x=y');
			console.log(response);
			done();
		})
	})
	it('should construct insert',function(done){
		let input = {
			INSERT: ['col1','col2','col3'],
			values: ['val1','val2','val3'],
			FROM: 'example'
		}
		builder.buildQuery(input,function(err,response){
			if(err) console.error();
			expect(response.query).to.be.equal('INSERT INTO example(col1,col2,col3) VALUES(val1,val2,val3)');
			console.log(response);
			done();
		})
	})
})