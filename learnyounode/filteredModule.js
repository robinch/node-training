var fs = require("fs");
var path = require("path");
module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, content){
		if(err){
			return callback(err);
		}

		list = [];
		content.forEach(function(element){
			if(path.extname(element) == '.' + ext){
				list.push(element);
			}
		})
		return callback(null, list);
	})
}