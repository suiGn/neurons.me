//a function to read a DOM document that I pass and url as a parameter  
//and return the content of the DOM document

//include  XMLHttpRequest object
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function readDOM(url) {
    //create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    //open the request
    xhr.open("GET", url, false);
    //send the request
    xhr.send();
    //return the response
    return xhr.responseText;
}

readDOM("https://wikileaks.org/ciav7p1/");


