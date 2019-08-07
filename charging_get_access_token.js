var request = require("request");

var options = { method: 'POST',
  url: 'https://developer.globelabs.com.ph/oauth/access_token',
  qs: 
   { app_id: '<app_id>',
     app_secret: '<app_secret>',
     code: '<code>' },
  headers: 
   { 'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});