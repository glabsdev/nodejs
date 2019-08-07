var request = require("request");

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/<Shortcode>/requests',
  qs: { access_token: '<access_token>' },
  headers: 
   {'Content-Type': 'application/json' },
  body: 
   { outboundSMSMessageRequest: 
      { clientCorrelator: '<clientCorrelator>',
        senderAddress: '<Shortcode>',
        outboundSMSTextMessage: { message: 'Hello World' },
        address: '<address>' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

