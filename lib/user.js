
var file = require('./file');
var Hash = require('jshashes');
var MD5 = new Hash.MD5();

var User = function(){

	var userAdd = function(user){

		if(file.folderExists('./db/'+user.id)){
			console.log('Folder Exists');
			return false;
		}
		else{
			console.log(user.pw);
			console.log(MD5.hex(user.pw));
			dbCreate({
				id : user.id,
				pw : _encodePasswordMd5(user.pw)
			});
		}
	}

	var dbCreate = function(user){
		var dbLoc = "/db/"+user.id;	
		file.mkdirSync(dbLoc);	
		file.makeFileWriteSync('/db/'+user.id+'/'+user.id+".json",JSON.stringify(user));
	}


	var _encodePasswordMd5 = function(pw){
		return MD5.hex(pw);
	}

	return {
		userAdd: userAdd
	}
}

exports.User = new User();