var request = require("request");

var app_id = 'B54z9Ug5512HHrTGRT5g6hq64pGUq6ap';
var app_secret = 'f655413712345607a696cd40741993758c411af3bb5f6c230270ec26e8d54126';
var rewards_token = 'AbCkxKYid_F_p-JSgTejow';
var transaction_id = '1234567';

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/rewards/v1/transactions/status',
  headers: 
   { 'Content-Type': 'application/json' },
  body: 
   { rewardStatusRequest: 
      { 'app_id': app_id,
        'app_secret': app_secret,
        'rewards_token': rewards_token,
        'transaction_id': transaction_id } },
  json: true };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
