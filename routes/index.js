
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.login = function(req,res){
//	res.writeHead(200, { 'Content-Type' : 'text/html'});
//	res.end('<h1> Test </h1>');
	alert('Test');
}