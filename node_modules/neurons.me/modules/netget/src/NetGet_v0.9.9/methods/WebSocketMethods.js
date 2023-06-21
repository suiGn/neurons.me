
var originIsAllowed = function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}
exports.originIsAllowed = originIsAllowed;

function generateRandom(){
	blockOne = Math.floor(10000000 + Math.random() * 90000000);
	blockTwo = Math.floor(10000000 + Math.random() * 90000000); 
    randomHASH = blockOne + blockTwo;
	return randomHASH;
  }
var randomHASH = generateRandom();
exports.randomHASH = randomHASH;