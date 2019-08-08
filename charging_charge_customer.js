var request = require("request");

var access_token = 'A-2szoYus7mB13l5axDrr_1234AApSz8eu236GRNsoBQ';
var amount = '0.00';
var description = 'NodeJS Charging Description';
var endUserId = '9771234567';
var referenceCode = '26481000001';
var transactionOperationStatus ='Charged';
var duration = '0';

var options = { method: 'POST',
  url: 'https://devapi.globelabs.com.ph/payment/v1/transactions/amount',
  qs: { 'access_token': access_token },
  headers: { Host: 'devapi.globelabs.com.ph','Content-Type': 'application/json' },
  body: 
   { 'amount': amount,
     'description': description,
     'endUserId': endUserId,
     'referenceCode': referenceCode,
     'transactionOperationStatus': transactionOperationStatus,
     'duration': duration },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});