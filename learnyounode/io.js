var fs = require('fs');
var s = fs.readFileSync(process.argv[2]).toString();
var counter = 0;
for (var i = 0 ; i < s.length ; i++){
	if(s[i] == '\n') counter++;
}
console.log(counter);