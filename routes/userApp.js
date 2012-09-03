

User = require('../lib/user').User;

exports.login = function(req,res){
	User.userAdd({
		id : req.body.id,
		pw : req.body.pw
	});
	res.writeHead(200, { 'Content-Type' : 'text/html'});
	res.end('<h1> Test </h1>');
}


exports.register = function(req,res){
	User.userAdd({
		id : req.body.id,
		pw : req.body.pw
	});
	res.writeHead(200, { 'Content-Type' : 'text/html'});
	res.end('<h1> Test </h1>');
}
