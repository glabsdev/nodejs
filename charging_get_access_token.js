var request = require("request");

var app_id = 'B54z9Ug5512HHrTGRT5g6hq64pGUq6ap';
var app_secret = 'f655413712345607a696cd40741993758c411af3bb5f6c230270ec26e8d54126';
var code = 'osg68ErhoXxaACygn5yS7yAqRfB6E49S7qE75Id6z4puxBayXhpGMdzFzxeb6FKded8uayLbE8kxroI4zEB8taBrxeseAbLdsebpBLf4Rgp9Udkz6gFrnLdjC7oe9xu6begLFEyMj7FnRapRhjazkAuxaEyEIAoEdLSL6ALMfaqnE5SqjxXnCdX8johkpeBRs';

var options = { method: 'POST',
  url: 'https://developer.globelabs.com.ph/oauth/access_token',
  qs: 
   { 'app_id': app_id,
     'app_secret': app_secret,
     'code': code },
  headers: 
   { 'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});