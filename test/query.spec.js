'use strict';
var expect = require('chai').expect;
var query = require('../lib/query/query');

describe('query', function () {
	it('should construct insert statement with multiple columns', function (done) {
		let input = {
			FROM: "example",
			columns: ["col1", "col2", "col3"],
			values: ["val1", "val2", "val3"]
		}
		query.constructInsert(input, function (err, response) {
			if (err) console.error();
			expect(response).to.be.a('object');
			expect(response).to.have.property('query');
			expect(response.query).to.be.equal('INSERT INTO example(col1,col2,col3) VALUES(val1,val2,val3)');
			console.log(response.query);
			done();
		})
	})
	it('should construct insert with one column', function (done) {
		let input = {
			FROM: "example",
			columns: "col",
			values: "val"
		}
		query.constructInsert(input, function (err, response) {
			if (err) console.error();
			expect(response).to.be.a('object');
			expect(response).to.have.property('query');
			expect(response.query).to.be.equal('INSERT INTO example(col) VALUES(val)');
			console.log(response.query);
			done();
		})
	})
	it('should construct update', function (done) {
		let input = {
			FROM: "example",
			columns: ["col1", "col2", "col3"],
			values: ["val1", "val2", "val3"],
			WHERE: "x=y"
		}
		query.constructUpdate(input, function (err, response) {
			if (err) console.error();
			expect(response).to.be.a('object');
			expect(response).to.have.property('query');
			expect(response.query).to.be.equal('UPDATE example SET(col1,col2,col3)=(val1,val2,val3) WHERE x=y');
			console.log(response.query);
			done();
		})
	})
})