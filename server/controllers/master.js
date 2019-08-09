const jwt = require('jsonwebtoken');
const secret = require('./secret');

function authenticate(req, res, next) {
	if((req.originalUrl === '/api/login') || (req.originalUrl == '/api/user')) {
	} else {
		console.log(`(^.^)// Being Accessed by: ${req.originalUrl}`)
    	if (!req.headers.authorization) {
      		 res.status(401).end();
    	}
    	try {
      		const token = req.headers.authorization.split(' ')[1];
      		jwt.verify(token, secret);
    	} catch (err) {
      		console.error(err);
          return	res.status(401).end();

    	}
  	}
  next();
}

module.exports = {
  authenticate
};