var fs = require('fs');
var path=require('path')
var rootPath = path.resolve();

var mkdirSync = function(id){
	fs.mkdirSync(rootPath+id);
};

var makeFileWriteSync = function (loc,contents){
	fs.writeFileSync(rootPath+loc, contents, 'utf-8');
}

var folderExists = function(loc){
	var test = path.resolve(loc);
	return path.existsSync(test);
	/*path.exists(test,  function(exists){
		console.log('success ? false ?');
	});*/
};
exports.folderExists = folderExists;
exports.mkdirSync = mkdirSync;
exports.makeFileWriteSync = makeFileWriteSync;