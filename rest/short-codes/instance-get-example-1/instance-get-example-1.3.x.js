// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.shortCodes('SC6b20cb705c1e8f00210049b20b70fce2')
  .fetch()
  .then((shortCode) => console.log(shortCode.shortCode));
