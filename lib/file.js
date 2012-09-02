var fs = require('fs');


var _mkdirSync = function(path,name){
	fs.mkdirSync(path/name);
};

var _folderExists = function(path){
	return fs.exists(path);
};
