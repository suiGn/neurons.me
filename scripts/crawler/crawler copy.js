//Description: This script crawls a website and returns the DOM document   
//ask for an url on the terminal to input     
//when executed first ask for user to input an url on the terminal
//define prompt 
var prompt = require('prompt-sync')();
var url = prompt("Enter an url: ");

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
//identify all the links that belong to the root domain
var rootDomainLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf(rootDomain) == 0) {
        rootDomainLinks.push(links[i]);
    }
}
//identify the fragment URLS    
var fragmentURLs = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf("#") == 0) {
        fragmentURLs.push(links[i]);
    }
}
//identify the absolute path links
var absolutePathLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf(rootDomain) == 0 && links[i].indexOf("#") != 0) {
        absolutePathLinks.push(links[i]);
    }
}
//identify the links that take you to a different website and are nnot fragment URLs nor the relative path
var externalLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf(rootDomain) != 0 && links[i].indexOf("#") != 0 && links[i].indexOf("/") != 0) {
        externalLinks.push(links[i]);
    }
}
//identify the relative path links
var relativePathLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf("/") == 0) {
        relativePathLinks.push(links[i]);
    }
}
//print the links
//console.log("Links:");
//console.log(links);
//print the root domain
console.log("Root Domain:");
console.log(rootDomain);
/*print the links that belong to the root domain
console.log("Root Domain Links:");
console.log(rootDomainLinks);
//print fragment URLs
console.log("Fragment URLs:");
console.log(fragmentURLs);
//print the links that take you to a different website
console.log("External Links:");
console.log(externalLinks);
//print the relative path links
console.log("Relative Path Links:");
console.log(relativePathLinks);
//print the absolute path links
console.log("Absolute Path Links:");
console.log(absolutePathLinks);*/

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
//print the h1 throuh h6 tags
console.log("h1:");
console.log(h1);
console.log("h2:");
console.log(h2);
console.log("h3:");
console.log(h3);
console.log("h4:");
console.log(h4);
console.log("h5:");
console.log(h5);
console.log("h6:");
console.log(h6);

//identify all p tags and return them to its correpsonding array if not return null
var p = DOM.match(/<p>([^<]*)<\/p>/g);
if (p != null) {
    for (var i = 0; i < p.length; i++) {
        p[i] = p[i].replace('<p>', '');
        p[i] = p[i].replace('</p>', '');
    }
}
//print the p tags
console.log("p:");
console.log(p);

//identify all bold tags and return them to its correpsonding array if not return null
var bold = DOM.match(/<b>([^<]*)<\/b>/g);
if (bold != null) {
    for (var i = 0; i < bold.length; i++) {
        bold[i] = bold[i].replace('<b>', '');
        bold[i] = bold[i].replace('</b>', '');
    }
}
//print the bold tags
console.log("bold:");
console.log

//identify all italic tags and return them to its correpsonding array if not return null
var italic = DOM.match(/<i>([^<]*)<\/i>/g);
if (italic != null) {
    for (var i = 0; i < italic.length; i++) {
        italic[i] = italic[i].replace('<i>', '');
        italic[i] = italic[i].replace('</i>', '');
    }
}
//print the italic tags
console.log("italic:");
console.log(italic);

//identify all strong tags and return them to its correpsonding array if not return null
var strong = DOM.match(/<strong>([^<]*)<\/strong>/g);
if (strong != null) {  
    for (var i = 0; i < strong.length; i++) {
        strong[i] = strong[i].replace('<strong>', '');
        strong[i] = strong[i].replace('</strong>', '');
    }
}   
//print the strong tags
console.log("strong:");
console.log(strong);

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
//print the emails
console.log("email:");
console.log(email);

//identify phone numbers and return them to its correpsonding array if not return null
var phone = DOM.match(/(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})/g);
//print the phone numbers
console.log("phone:");
console.log(phone);

//identify all text and return them to its correpsonding array if not return null
var text = DOM.match(/<[^>]*>([^<]*)<\/[^>]*>/g);
if (text != null) {
    for (var i = 0; i < text.length; i++) {
        text[i] = text[i].replace(/<[^>]*>/g, '');
    }
}
//print the text
console.log("text:");
console.log(text);  






//Description: This script crawls a website and returns the DOM document   
//ask for an url on the terminal to input     
//when executed first ask for user to input an url on the terminal
//define prompt 
var prompt = require('prompt-sync')();
var url = prompt("Enter an url: ");

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
//identify all the links that belong to the root domain
var rootDomainLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf(rootDomain) == 0) {
        rootDomainLinks.push(links[i]);
    }
}
//identify the fragment URLS    
var fragmentURLs = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf("#") == 0) {
        fragmentURLs.push(links[i]);
    }
}
//identify the absolute path links
var absolutePathLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf(rootDomain) == 0 && links[i].indexOf("#") != 0) {
        absolutePathLinks.push(links[i]);
    }
}
//identify the links that take you to a different website and are nnot fragment URLs nor the relative path
var externalLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf(rootDomain) != 0 && links[i].indexOf("#") != 0 && links[i].indexOf("/") != 0) {
        externalLinks.push(links[i]);
    }
}
//identify the relative path links
var relativePathLinks = [];
for (var i = 0; i < links.length; i++) {
    if (links[i].indexOf("/") == 0) {
        relativePathLinks.push(links[i]);
    }
}
//print the links
//console.log("Links:");
//console.log(links);
//print the root domain
console.log("Root Domain:");
console.log(rootDomain);
/*print the links that belong to the root domain
console.log("Root Domain Links:");
console.log(rootDomainLinks);
//print fragment URLs
console.log("Fragment URLs:");
console.log(fragmentURLs);
//print the links that take you to a different website
console.log("External Links:");
console.log(externalLinks);
//print the relative path links
console.log("Relative Path Links:");
console.log(relativePathLinks);
//print the absolute path links
console.log("Absolute Path Links:");
console.log(absolutePathLinks);*/

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
//print the h1 throuh h6 tags
console.log("h1:");
console.log(h1);
console.log("h2:");
console.log(h2);
console.log("h3:");
console.log(h3);
console.log("h4:");
console.log(h4);
console.log("h5:");
console.log(h5);
console.log("h6:");
console.log(h6);

//identify all p tags and return them to its correpsonding array if not return null
var p = DOM.match(/<p>([^<]*)<\/p>/g);
if (p != null) {
    for (var i = 0; i < p.length; i++) {
        p[i] = p[i].replace('<p>', '');
        p[i] = p[i].replace('</p>', '');
    }
}
//print the p tags
console.log("p:");
console.log(p);

//identify all bold tags and return them to its correpsonding array if not return null
var bold = DOM.match(/<b>([^<]*)<\/b>/g);
if (bold != null) {
    for (var i = 0; i < bold.length; i++) {
        bold[i] = bold[i].replace('<b>', '');
        bold[i] = bold[i].replace('</b>', '');
    }
}
//print the bold tags
console.log("bold:");
console.log

//identify all italic tags and return them to its correpsonding array if not return null
var italic = DOM.match(/<i>([^<]*)<\/i>/g);
if (italic != null) {
    for (var i = 0; i < italic.length; i++) {
        italic[i] = italic[i].replace('<i>', '');
        italic[i] = italic[i].replace('</i>', '');
    }
}
//print the italic tags
console.log("italic:");
console.log(italic);

//identify all strong tags and return them to its correpsonding array if not return null
var strong = DOM.match(/<strong>([^<]*)<\/strong>/g);
if (strong != null) {  
    for (var i = 0; i < strong.length; i++) {
        strong[i] = strong[i].replace('<strong>', '');
        strong[i] = strong[i].replace('</strong>', '');
    }
}   
//print the strong tags
console.log("strong:");
console.log(strong);

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
//print the emails
console.log("email:");
console.log(email);

//identify phone numbers and return them to its correpsonding array if not return null
var phone = DOM.match(/(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})/g);
//print the phone numbers
console.log("phone:");
console.log(phone);

//identify all text and return them to its correpsonding array if not return null
var text = DOM.match(/<[^>]*>([^<]*)<\/[^>]*>/g);
if (text != null) {
    for (var i = 0; i < text.length; i++) {
        text[i] = text[i].replace(/<[^>]*>/g, '');
    }
}
//print the text
console.log("text:");
console.log(text);  

//identify all imgs tags make them absolute urls and return them to its correpsonding array if not return null
var img = DOM.match(/<img[^>]*>/g);
if (img != null) {
    for (var i = 0; i < img.length; i++) {
        img[i] = img[i].replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '$1');
        img[i] = img[i].replace(/<img[^>]*src='([^']*)'[^>]*>/g, '$1');
        img[i] = img[i].replace(/<img[^>]*src=([^ >]*)[^>]*>/g, '$1');
        if (img[i].indexOf('http') == -1) {
            img[i] = url + img[i];
        }
    }
}
//print the img tags
console.log("img:");
console.log(img);

//identify all pdf tags make them absolute urls and return them to its correpsonding array if not return null
var pdf = DOM.match(/<a[^>]*href="([^"]*.pdf)"[^>]*>/g);
if (pdf != null) {
    for (var i = 0; i < pdf.length; i++) {
        if (pdf[i].indexOf('http') == -1) {
            pdf[i] = url + pdf[i];
        }
    }
}
//print the pdf tags
console.log("pdf:");
console.log(pdf);



