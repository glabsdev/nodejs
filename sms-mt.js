var request = require("request");

var shortcode = '2648';
var access_token = 'A-2szoYus7mB13l5axDrr_1234AApSz8eu236GRNsoBQ';
var address = '9771234567';
var clientCorrelator = '264801';
var message = 'NodeJS SMS Test';

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/' + shortcode + '/requests',
  qs: { 'access_token': access_token },
  headers: 
   { 'Content-Type': 'application/json' },
  body: 
   { 'outboundSMSMessageRequest': 
      { 'clientCorrelator': clientCorrelator,
        'senderAddress': shortcode,
        'outboundSMSTextMessage': { 'message': message },
        'address': address } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

