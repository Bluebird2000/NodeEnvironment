const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const { app } = require('../app');
chai.use(chaiHttp);
describe('Tdd application', function () {
    it('should get response statusCode', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                //console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});