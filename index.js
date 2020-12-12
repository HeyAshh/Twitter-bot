const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
});

// connect to twitter via api

// pull next tweet from SS
const sheet = new Sheet();
await sheet.load();
const quotes = away sheet.getRows();
console.log(quotes[0].quote);

// send tweet
client.post('statuses/update', {status},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

// remove quote from SS

//. git testing 1 main
