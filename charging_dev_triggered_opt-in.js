var request = require('request');

var app_id = 'B54z9Ug5512HHrTGRT5g6hq64pGUq6ap';
var app_secret = 'f655413712345607a696cd40741993758c411af3bb5f6c230270ec26e8d54126';
var subscriber_number = '9771234567';
var amount = '0.00';
var duration = '0';

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/payment/v1/smsoptin',
  qs: 
   { 'app_id': app_id,
     'app_secret': app_secret,
     'subscriber_number': subscriber_number,
     'duration': duration,
     'amount': amount },
  headers: { Host: 'devapi.globelabs.com.ph' } 
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
