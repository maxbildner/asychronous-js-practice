// NOTES FROM CODECADEMY NODE.JS COURSE
// *****************************************************************************
// 1) THROW ___ KEYWORD
// - JS keyword, execution of the current function will stop and any 
//   statements after won’t be executed
// - lets you create custom errors
// - Control is passed to the first catch block 
// 
// Example 1:

// function addOne(num) {
//   if (isNaN(num)) {
//     throw 'input not a number!';
//   }
// }

// addOne('yo');                       //=> ... "input not a number!"



// *****************************************************************************
// 2) TRY ... CATCH ..
// - ... = code to try
// - ..  = code that runs if exeception (error) is met in try block
// - Finally = code that runs regardless if there’s an exception or not
// 
// Example 1:

// function addOne(num) {
//   if (isNaN(num)) {
//     throw 'input not a number!';
//   }
// }

// try {
//   addOne('yo');                       

// } catch(err) {
//   console.log(err);                     //=> "input not a number!"
// }


// *****************************************************************************
// 3) HTTP SERVERS

// import http core library (allows us to make/listen for http requests)
const http = require('http');

// - callback that's executed when a request to server is made
// - callback that takes in request and response objects
// - when a request to server is made, node will invoke this callback, 
//   passing in the request and response objects of the incoming request
let requestListener = (request, response) => {
  
  // make changes to response object. response code 200 = no errors
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World!\n');

  // signals that interaction is complete/ended
  response.end();   
};

// - creates an instance of http.server (has a .listen() method to listen for
// incoming connections)
// - takes in a callback that is triggered once the server that's listening
// receives a request
const server = http.createServer(requestListener);

// listen on port 3000
console.log('Listening on PORT=3000');
server.listen(3000);









