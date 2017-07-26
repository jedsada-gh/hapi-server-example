const code = require('code');
const expect = code.expect;
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const after = lab.after;

const server = require('../src/route.js');

lab.test.only('only this test will run', (done) => {
    server.inject({
        method: 'GET',
        url: '/api/employee'
    }, (response) => {
        expect(response.statusCode).to.equal(404);
        done();
    });
});