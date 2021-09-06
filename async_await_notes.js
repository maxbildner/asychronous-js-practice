// JS ASYNC AWAIT NOTES
// From Video Tutorial: https://www.youtube.com/watch?v=V_Kr9OSfDeU
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


// *****************************************************************************
// 1) Before Async Await- using a bunch of .then's

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);

    if (location === 'Google') {
      resolve('Google says yo');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {           // response = 'Google says yo' or the resolved value of promise
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest('Facebook').then(response => {
//   console.log('Response Receieved');
//   return processRequest(response);
// })
// .then(processedResponse => {
//   console.log(processedResponse);
// })
// .catch(err => console.log(err))



// *****************************************************************************
// 2) Using Async Await
// - syntactic sugar for writing asynchronous promises (cleaner than chaining .then's)
// - need to have a function that your awaiting code is inside of


async function doWork() {       // put all asynchronous code in here

  // use a try...catch block to simulate using .catch
  try {
    // - code should wait until this makeRequest is finished/resolved
    // - JS will do other code outside this function, and when makeRequest is done
    //   JS will return the resolve into this response variable
    const response = await makeRequest('Google')   // => resolved promise
  
    // once response receieved, the rest of the code below will execute
    console.log(`Response Receieved`);
  
    const processedResponse = await processRequest(response);
  
    console.log(processedResponse);

  } catch(err) {
    console.log(err);
  }
}


doWork();
