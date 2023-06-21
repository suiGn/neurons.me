// node _ ___   _  _  __
//  |V||_  ||_|/ \| \(_ 
//  | ||__ || |\_/|_/__)	
const script = require('../script.js');

//NON RELATIONAL DATABASE MongoDB

//REGEXS
//EMAIL REGEX
const emailRegex = (email) => {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
exports.emailRegex = emailRegex;
//USERNAME REGEX
const usrnmRegex = (usrname) => {
	var re = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
	return re.test(usrname);
}
exports.usrnmRegex = usrnmRegex;
//NAME REGEX
const nameRegex = (subname) => {
	var re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,21}$/u;
	return re.test(subname);
}	
exports.nameRegex = nameRegex;