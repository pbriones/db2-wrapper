'use strict';
var expect = require('chai').expect;
var query = require('../lib/query/query');

describe.only('query', function () {
	it('should construct insert statement with multiple columns', function (done) {
		let input = {
			table: "example",
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
			table: "example",
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
})