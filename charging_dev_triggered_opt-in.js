var request = require("request");

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/payment/v1/smsoptin',
  qs: 
   { app_id: '<app_id>',
     app_secret: '<app_secret>',
     subscriber_number: '<subscriber_number>',
     duration: '<duration>',
     amount: '<amount>' },
  headers: 
   { Host: 'devapi.globelabs.com.ph' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
