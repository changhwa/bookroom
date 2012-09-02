
/*
 * GET home page.
 */

User = require('../lib/user').User;

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.login = function(req,res){
	var aaa = User.userAdd();
	alert(aaa);
	res.writeHead(200, { 'Content-Type' : 'text/html'});
	res.end('<h1> Test </h1>');
}