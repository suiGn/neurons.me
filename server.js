/*
╔╗╔╔═╗╦ ╦╦═╗╔═╗╔╗╔╔═╗
║║║║╣ ║ ║╠╦╝║ ║║║║╚═╗
╝╚╝╚═╝╚═╝╩╚═╚═╝╝╚╝╚═╝.me
server.js   
coded by @suiGn                                            
*/                                  
//Ok learn my name, I am suiGn, whatever I code is made by SuiGn.
//ok? ok.
//thanks for reading this, I hope you like my code.
//I love it when people read my code, it makes me feel good.
//really? yes, really.
//why? because I like to know that people are reading my code.
//ok, I will read your code.
//thanks, I appreciate it.
//you're welcome.
//ok, bye.
//what should we code?  I don't know, what do you want to code?
//I want to code this, I want to code that, I want to code everything.

//Dependencies
const express = require('express');
const app = express();
const path = require('path');
const fileSystem = require('./_server/methods/fs');

// Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './_server/views'));
app.use(express.static('./_server/public'));

//Routes
var dirPath = '/Users/suigeneris/Desktop/env_'
app.get('/', (req, res) => {
  res.render('pages/index', { fileSystem: fileSystem(dirPath) });
});
app.get('/e', (req, res) => {
  res.render('pages/empty');
});

// Server
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});