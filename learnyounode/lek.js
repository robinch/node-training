var BufferList = require("bl");

var bls = [];
bls[0] = new BufferList();
bls[1] = new BufferList();

bls[0].append("hej");
bls[1].append("testar");


console.log(bls[0].toString());
console.log(bls[1].toString());
