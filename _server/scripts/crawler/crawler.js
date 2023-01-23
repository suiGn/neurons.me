//Description: This script crawls a website and returns the DOM document   
//ask for an url on the terminal to input     
//when executed first ask for user to input an url on the terminal
//define prompt 
var prompt = require('prompt-sync')();
var url = prompt("Enter an url: ");
//if URL gives an error try again with different one    
while (url == "") {
    url = prompt("Enter an url: ");
}
//if URL is not valid try again with different one
while (url.indexOf("http") != 0) {
    url = prompt("Enter an url: ");
}
//if URL is valid continue
if (url.indexOf("http") == 0) {
    console.log("URL is valid");
}

//if URL is not accessible try again with different one
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();
if (xhr.status != 200) {
    url = prompt("Unaccessible - Enter a new url: ");
}
//if URL is accessible continue
if (xhr.status == 200) {
    console.log("URL is accessible");
}

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
//read the DOM document
var DOM = readDOM(url);

/* Links in the DOM
  _    ___ _  _ _  _____ 
 | |  |_ _| \| | |/ / __|
 | |__ | || .` | ' <\__ \
 |____|___|_|\_|_|\_\___/
              section */

var links = DOM.match(/href="([^"]*)"/g);
//remove the href text to leave only the url
for (var i = 0; i < links.length; i++) {
    links[i] = links[i].replace('href="', '');
    links[i] = links[i].replace('"', '');
}

//identify the root domain
var rootDomain = url.match(/https?:\/\/[^\/]*/)[0];

/*
╔╦╗╔═╗╔╦╗  ╔╦╗╔═╗╔═╗╔═╗
 ║║║ ║║║║   ║ ╠═╣║ ╦╚═╗
═╩╝╚═╝╩ ╩   ╩ ╩ ╩╚═╝╚═╝
*/

//identify title of the website
var title = DOM.match(/<title>([^<]*)<\/title>/)[1];
    //print the title
    console.log("Title:");
    console.log(title);

//identify the meta description if not meta description is found return null
var metaDescription = DOM.match(/<meta name="description" content="([^"]*)"/);
if (metaDescription != null) {
    metaDescription = metaDescription[1];
}
//print the meta description
console.log("Meta Description:");
console.log(metaDescription);
//identify the meta keywords if not meta keywords is found return null
var metaKeywords = DOM.match(/<meta name="keywords" content="([^"]*)"/);
if (metaKeywords != null) {
    metaKeywords = metaKeywords[1];
}
//print the meta keywords
console.log("Meta Keywords:");
console.log(metaKeywords);

//identify the h1 throuh h6 tags and return them to its correpsonding array if not return null
var h1 = DOM.match(/<h1>([^<]*)<\/h1>/g);
if (h1 != null) {
    for (var i = 0; i < h1.length; i++) {
        h1[i] = h1[i].replace('<h1>', '');
        h1[i] = h1[i].replace('</h1>', '');
    }
}
var h2 = DOM.match(/<h2>([^<]*)<\/h2>/g);
if (h2 != null) {
    for (var i = 0; i < h2.length; i++) {
        h2[i] = h2[i].replace('<h2>', '');
        h2[i] = h2[i].replace('</h2>', '');
    }
}
var h3 = DOM.match(/<h3>([^<]*)<\/h3>/g);
if (h3 != null) {
    for (var i = 0; i < h3.length; i++) {
        h3[i] = h3[i].replace('<h3>', '');
        h3[i] = h3[i].replace('</h3>', '');
    }
}
var h4 = DOM.match(/<h4>([^<]*)<\/h4>/g);
if (h4 != null) {
    for (var i = 0; i < h4.length; i++) {
        h4[i] = h4[i].replace('<h4>', '');
        h4[i] = h4[i].replace('</h4>', '');
    }
}
var h5 = DOM.match(/<h5>([^<]*)<\/h5>/g);
if (h5 != null) {
    for (var i = 0; i < h5.length; i++) {
        h5[i] = h5[i].replace('<h5>', '');
        h5[i] = h5[i].replace('</h5>', '');
    }
}
var h6 = DOM.match(/<h6>([^<]*)<\/h6>/g);
if (h6 != null) {
    for (var i = 0; i < h6.length; i++) {
        h6[i] = h6[i].replace('<h6>', '');
        h6[i] = h6[i].replace('</h6>', '');
    }
}



//identify all p tags and return them to its correpsonding array if not return null
var p = DOM.match(/<p>([^<]*)<\/p>/g);
if (p != null) {
    for (var i = 0; i < p.length; i++) {
        p[i] = p[i].replace('<p>', '');
        p[i] = p[i].replace('</p>', '');
    }
}

//identify all bold tags and return them to its correpsonding array if not return null
var bold = DOM.match(/<b>([^<]*)<\/b>/g);
if (bold != null) {
    for (var i = 0; i < bold.length; i++) {
        bold[i] = bold[i].replace('<b>', '');
        bold[i] = bold[i].replace('</b>', '');
    }
}

//identify all italic tags and return them to its correpsonding array if not return null
var italic = DOM.match(/<i>([^<]*)<\/i>/g);
if (italic != null) {
    for (var i = 0; i < italic.length; i++) {
        italic[i] = italic[i].replace('<i>', '');
        italic[i] = italic[i].replace('</i>', '');
    }
}


//identify all strong tags and return them to its correpsonding array if not return null
var strong = DOM.match(/<strong>([^<]*)<\/strong>/g);
if (strong != null) {  
    for (var i = 0; i < strong.length; i++) {
        strong[i] = strong[i].replace('<strong>', '');
        strong[i] = strong[i].replace('</strong>', '');
    }
}   

//identify all em tags and return them to its correpsonding array if not return null
var em = DOM.match(/<em>([^<]*)<\/em>/g);
if (em != null) {
    for (var i = 0; i < em.length; i++) {
        em[i] = em[i].replace('<em>', '');
        em[i] = em[i].replace('</em>', '');
    }
}
//print the em tags
console.log("em:");
console.log(em);

//identiy all emails and return them to its correpsonding array if not return null
var email = DOM.match(/([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/g);
//identify phone numbers and return them to its correpsonding array if not return null
var phone = DOM.match(/(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})/g);

//identify all text and return them to its correpsonding array if not return null
var text = DOM.match(/<[^>]*>([^<]*)<\/[^>]*>/g);
if (text != null) {
    for (var i = 0; i < text.length; i++) {
        text[i] = text[i].replace(/<[^>]*>/g, '');
    }
}

//identify all imgs urls and add them to an array
var img = DOM.match(/<img[^>]*src="([^"]*)"[^>]*>/g);
if (img != null) {
    for (var i = 0; i < img.length; i++) {
        img[i] = img[i].replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '$1');

    }
}




//identify all pdf tags make them absolute urls and return them to its correpsonding array if not return null
var pdf = DOM.match(/<a[^>]*href="([^"]*.pdf)"[^>]*>/g);
if (pdf != null) {
    for (var i = 0; i < pdf.length; i++) {
        if (pdf[i].indexOf('http') == -1) {
            pdf[i] = url + pdf[i];
        }
    }
}


//identify the language of the page if null return null
var lang = DOM.match(/<html[^>]*lang="([^"]*)"[^>]*>/g);
if (lang != null) {
    for (var i = 0; i < lang.length; i++) {
        lang[i] = lang[i].replace(/<html[^>]*lang="([^"]*)"[^>]*>/g, '$1');
    }
}

//identify textareas and return them to its correpsonding array if not return null
var textarea = DOM.match(/<textarea[^>]*>([^<]*)<\/textarea>/g);
if (textarea != null) {
    for (var i = 0; i < textarea.length; i++) {
        textarea[i] = textarea[i].replace(/<textarea[^>]*>([^<]*)<\/textarea>/g, '$1');
    }
}


//create a json object with all the arrays
var json = {
    "rootDomain": rootDomain,
    "title": title,
    "h1": h1,
    "h2": h2,
    "h3": h3,
    "h4": h4,
    "h5": h5,
    "h6": h6,
    "p": p,
    "bold": bold,
    "italic": italic,
    "strong": strong,
    "em": em,
    "textarea": textarea,
    "email": email,
    "phone": phone,
    "text": text,
    "img": img,
    "pdf": pdf,
    "lang": lang
};


console.log(json);


