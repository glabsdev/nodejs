var request = require("request");
var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/rewards/v1/transactions/send',
  headers: 
   { Host: 'devapi.globelabs.com.ph', 'Content-Type': 'application/json' },
  body: 
   { outboundRewardRequest: 
      { app_id: '<app_id>',
        app_secret: '<app_secret>',
        rewards_token: '<rewards_token>',
        address: '<address>',
        promo: '<promo>' } },
  json: true };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
