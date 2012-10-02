
Api = require('../lib/api').Api;

exports.bookSearchList = function(req,res){
	console.log('bookSearchList');

	return Api.api({
		host : 'http://openapi.naver.com',
		port : 80,
		path : '/search',
		key : req.session.apiKey,
		query: req.body.content,
		display: req.body.display,
		start: req.body.startPage,
		target: req.body.target
	});
	res.redirect('/');
}
