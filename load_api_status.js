var request = require("request");
var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/rewards/v1/transactions/status',
  headers: 
   { 'Content-Type': 'application/json' },
  body: 
   { rewardStatusRequest: 
      { app_id: '<app_id>',
        app_secret: '<app_secret>',
        rewards_token: '<rewards_token>',
        transaction_id: '<transaction_id>' } },
  json: true };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
