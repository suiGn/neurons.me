// netGet____   _  _  __
//  |V||_  ||_|/ \| \(_ 
//  | ||__ || |\_/|_/__)	
const index = require('../index');


//DATA BASE CONNECTION
//const { Client } = require('pg');
//RELATIONAL DATABASE POSTGRGES
//const theVault = new Client({
//connectionString: "postgres://csicplnifqncpc:ce12c51c83e437148779a4f7e0d508722f0a5ce9f05f894f9b6f88b9f2d9b3f9@ec2-174-129-253-53.compute-1.amazonaws.com:5432/d70qi6m3chd89a",
//ssl: { rejectUnauthorized: false }
//});
//theVault.connect();

//NON RELATIONAL DATABASE MongoDB

//DATA VALIDATION SECTION
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


//SUBMIT DATA VERIFICATION POSTGRES
exports.dataSubmitVerification = function dataSubmitVerification(pckr){
	if (pckr.code == 'vName'){//Verify Name
			if (nameRegex(pckr.value)) { //Validate name
				index.subVerificationRes("validDataRes", "", "#39D1BB", "inputName", "#labelName", "g");//ValidName
			} else {
			index.subVerificationRes("validDataRes", "Invalid Name!", "#ff6666", "inputName", "#labelName", "ni");
				}    
			}// VERIFY NAME CLOSURE
	else if (pckr.code == 'vUser'){//Validate Username
			if (usrnmRegex(pckr.value)) {
			theVault.query('SELECT Usrname FROM Usrs WHERE Usrname = $1', [pckr.value], (err, res) => {
			if(res.rowCount >= 1){
			index.subVerificationRes("validDataRes", "Username already taken!", "#ff6666", "inputUsername", "#labelUsername", "ut");
			 }else{	
			index.subVerificationRes("validDataRes", "", "#39D1BB", "inputUsername", "#labelUsername", "g");//validUsername
				}})}
			else{
			index.subVerificationRes("validDataRes", "Invalid Username!", "#ff6666", "inputUsername", "#labelUsername", "ui");
				}    
			}// VALID USERNAME CLOSURE		
	else if (pckr.code == 'vEmail'){//Validate Email
			if (emailRegex(pckr.value)) {
			theVault.query('SELECT Email FROM Usrs WHERE Email = $1', [pckr.value], (err, res) => {
			if(res.rowCount >= 1){
			index.subVerificationRes("validDataRes", "Email already taken!", "#ff6666", "inputEmail", "#labelEmail", "et");	
			}else{	
				index.subVerificationRes("validDataRes", "", "#39D1BB", "inputEmail", "#labelEmail", "g");//validEmail
				}})}
			else{
			index.subVerificationRes("validDataRes", "Invalid!", "#ff6666", "inputEmail", "#labelEmail", "ei");	
					}
				}//VALID EMAIL CLOSURE
}



// WEBSOCKET METHODS
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

/*BROADCAST
- Iterates through the complete list of its connected clients,
- for each client:
- Check if connection still Open
- if true => send broadcast message to that client.
- continue to the next client
*/

//client !== socketToOmit will omit a specific client.
function broadcast(data, socketToOmit) {
	wsServer.clients.forEach((client) => {
	  if (client.readyState === WebSocket.OPEN && client !== socketToOmit) {
		client.send(JSON.stringify(data));
	  }
	});
  }