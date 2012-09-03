
/*
 * GET home page.
 */

User = require('../lib/user').User;

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};
