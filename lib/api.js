var file = require('./file');
var rest = require("restler");


var Api = function (){

	console.log('???????????');

	var api = function(options){

		console.log('api start?? ');
		console.log(options.host+options.path+'?key='+options.key+'&query='+options.content+'&display='+options.display+'&start='+options.startPage+'&target='+options.target);

		rest.get(
			options.host+options.path+'?key='+options.key+'&query='+options.content+'&display='+options.display+'&start='+options.startPage+'&target='+options.target,
			{parser : rest.parsers.xml}
		).on('complete', function(err, data){
			if(err){
				console.log('Error');
			} else {
				console.log('No Error');
				for(var i in data.rss.channel){
					for(var j in data.rss.channel[i].item ){
						console.log(data.rss.channel[i].item[j].title);
					}
				}
			}			
		});
	}

	return {
		api: api
	}
}

exports.Api = new Api();