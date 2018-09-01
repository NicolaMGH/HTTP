var https = require("https");

console.log("I did it!!");

var options = {
  host: "www.example.org",
  path: "/"
}

//Called by https when the request is made
var callback = function(response) {
  console.log("In response handler callback.");
  console.log("response: ", response);
}

console.log("Im about to make a request!");

https.request(options, callback).end();

console.log("Ive made the request!");