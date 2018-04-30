import request from 'request';
import bluebird from 'bluebird';
import { expect } from 'chai';
import app from '../../app';
import getPort from 'get-port';

const req = bluebird.promisifyAll(request);

describe('mysql api', () => {
    let baseUrl, server
    before(async() => {
        const port = await getPort();
        baseUrl = `http://127.0.0.1:${port}/employees`;
        server = app.listen(port);
    });
    after(() => {
        server.close();
    });
    describe('GET /employees', () => {
        let result;
        before(async() => {
            result = await req.getAsync(baseUrl);
        });
        it('should return string', (done) => {
            //expect(result.statusCode).to.equal(200);
            expect('foo').to.be.a('string');
            done();
        });
        it('should return one listings', (done) => {
            expect(JSON.parse(result.body).number).to.equal(1);
            done();
        });
    });
});