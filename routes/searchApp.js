
Api = require('../lib/api').Api;

exports.bookSearchList = function(req,res){
	console.log('bookSearchList');

	//var options = 
	Api.api({
		host : 'http://openapi.naver.com',
		port : 80,
		path : '/search?key=44055c754ce71545f4f4439db5111cdd&query=%EC%82%BC%EA%B5%AD%EC%A7%80&display=10&start=1&target=book'
	});
	res.redirect('/');
}
