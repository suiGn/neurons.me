//connect facebook api  
var Facebook = require('facebook-node-sdk');
//setup credentials for FILOSOFO EBRIO facebook api
var filosofoEbrio = new Facebook({
    appId: '312301386473787',
    secret: '9e1acd73d5c875d4aae1a3f3453dcc51'
});

const FacebookPostPlanner = require('facebook-post-planner');
const planner = new FacebookPostPlanner();

planner.schedule({
  pageId: 'your-page-id',
  message: 'Este es un mensaje de prueba',
  scheduledTime: new Date() // publicar inmediatamente
});
