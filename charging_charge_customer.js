var request = require("request");

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/payment/v1/transactions/amount',
  qs: 
   { access_token: '<access_token>',
     amount: '<amount>',
     description: 'AppTest',
     endUserId: '<endUserId>',
     referenceCode: '<referenceCode>',
     transactionOperationStatus: 'Charged',
     duration: '<duration>' },
  headers: 
   { 'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
