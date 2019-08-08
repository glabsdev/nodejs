var request = require("request");

var access_token = 'A-2szoYus7mB13l5axDrr_1234AApSz8eu236GRNsoBQ';
var address = '9771234567';
var requestedAccuracy = '100';

var options = { method: 'GET',
  url: 'https://devapi.globelabs.com.ph/location/v1/queries/location',
  qs: 
   { 'access_token': access_token,
     'address': address,
     'requestedAccuracy': requestedAccuracy },
  headers: 
   { Host: 'devapi.globelabs.com.ph',
     'Content-Type': 'application/json' } };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
