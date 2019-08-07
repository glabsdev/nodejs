var request = require("request");
var options = { method: 'GET',
  url: 'https://devapi.globelabs.com.ph/location/v1/queries/location',
  qs: 
   { access_token: '<access_token>',
     address: '<address>',
     requestedAccuracy: '100' },
  headers: 
   { Host: 'devapi.globelabs.com.ph',
     'Content-Type': 'application/json' } };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
