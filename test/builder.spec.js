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
			console.log(response);
		})
	})
})