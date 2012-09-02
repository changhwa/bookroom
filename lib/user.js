
var file = require('./file');

var User = function(){

	var userAdd = function(){

		console.log('Test');

		// if(file._folderExists){
		// 	console.log('폴더가 있습니다.');
		// }
		// else{
		// 	alert('폴더가 없습니다');
		// 	console.log('폴더가 없습니다.');
		// }
	}

	return {
		userAdd: userAdd
	}
}

exports.User = new User();