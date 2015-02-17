var fl = require("./filteredModule.js");

fl(process.argv[2], process.argv[3], function(err, content){
	if(err){
		console.log(err);
		return;
	}
	content.forEach(function(element){
		console.log(element);
	});
});