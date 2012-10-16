
Api = require('../lib/api').Api;

exports.bookSearchList = function(req,res){
	console.log('bookSearchList');
	console.log(req.body);
	console.log(req.session.apiKey);
	return Api.api({
		host : 'http://openapi.naver.com',
		port : 80,
		path : '/search',
		key : req.session.apiKey,
		query: req.body.query,
		display: req.body.display,
		start: req.body.start,
		target: req.body.target
	});
	res.redirect('/');
}
