const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

const authMiddleware = require('../middleware/is-auth');

describe('Auth Middleware', function () {
	it('should throw an error if no auth header is present', function () {
		const req = {
			get: function (headerName) {
				return null;
			},
		};
		expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
			'Not authenticated.'
		);
	});

	it('should throw an error an error if the auth header is only one string', function () {
		const req = {
			get: function (headerName) {
				return 'xyz';
			},
		};
		expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
	});

	it('should throw an error if the token cannot be verified', function () {
		const req = {
			get: function (headerName) {
				return 'Bearer xyz';
			},
		};
		expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
	});

	it('should yield a userId after decoding the token', function () {
		const req = {
			get: function (headerName) {
				return 'Bearer djfkalsdjfaslfjdlas';
			},
		};
		sinon.stub(jwt, 'verify');
		jwt.verify.returns({ userId: 'abc' }); // override actual verify method with test function
		authMiddleware(req, {}, () => {});
		expect(req).to.have.property('userId');
		expect(req).to.have.property('userId', 'abc');
		expect(jwt.verify.called).to.be.true;
		jwt.verify.restore();
	});
});
