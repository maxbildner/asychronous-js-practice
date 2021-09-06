// JS PROMISES NOTES
// From Video Tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E
// More Info: https://javascript.info/promise-basics


// *****************************************************************************
// 1) JS PROMISE
//   - JS Objects that are the outcome of an asynchronous operation (ex. get data from database/api)
//   - Has these properties: State, Result
//        1) STATE Can have one of three states:
//            - PENDING = initial state. Operation not completed
//            - FULFILLED = operation has completed (Settled)
//            - REJECTED = operation has failed(error) (Settled)
//        2) RESULT
//            - initially undefined, then changes to value passed into resolve(value)
//              or when reject(errorObj) is called
//        


// *****************************************************************************
// 2) Creating a new promise      new Promise(executor) => JS Promise
// - Parameter: Exectutor function (which takes in two parameters)
// - Executor function is run when promise is created
// - Executor function takes in two functions automatically:
//   - resolve(value)    function to run if promise succeeds
//     - changes promise's status from pending to fulfilled 
//     - promise's resolved value set to argument passed into resolve
//     - only used once (if there are multiple resolves, only 1st one used, rest ignored)
//   - reject(error)     function to run if promise fails
//     - changes promise's status from pending to rejected, and the 
//       reason set to the argument passed into reject()
// - we can't access the resolved value of p directly, so we have to use .then

// Example 1:
let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a === 2) {
    resolve('Success');        // promises resovled value set to argument passed into resolve   
  } else {
    reject('Failed');          // promises rejected reason value set to argument passed into reject   
  }
})


// *****************************************************************************
// 3) JS Promise.then( onFulfilled, onRejected )    => Settled JS Promise
//    - onFulfilled(value) = optional cb that's run if promise Resolves
//      - automatically takes in resolved value of promise
//    - onRejected(error) = optional cb that's run if promise is Rejected
//      - automatically taked in the rejected reason of the error
//    - Returns:
//      - a promise with same settled value as the promise it was called on 
//        if no callbacks provided
//      - can chain resolved logic from rejected logic

// Example (uses p above in example 1, #2):
p.then((message) => {                       
  console.log('This is in the then ' + message);
}).catch((message) => {                             // catch will be run if promise is rejected
  console.log('This is in the catch ' + message);
})


// *****************************************************************************
// 4) promise.catch()
//    .catch(f) is the same as promise.then(null, f)


// *****************************************************************************
// 5) Callback hell
// - callback inside of a callback, inside of a callback, ...
// - Promises are a way to avoid callback hell (makes it easier to read and no nesting)


// *****************************************************************************
// 6) Promise.all( [] )
// - [] = an array of promises
// - returns a single promise
//    - if all promises resolve, will return a promise with an array containing 
//      resolve value from each promise
//    - if any promises reject, will return a promise that immediately rejects
//      with the reason that promise rejected (failing fast)

// Example: 
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
//   .then(
//     (messages) => {
//       console.log(messages)   //=> ["Video 1 Recorded", "Video 2 Recorded", "Video 3 Recorded"]
//     }
//   )
// - will run all promises, and as soon as any are done, will run
//   .then and .catch methods depending if they suceed or fail
// - all promises run at same time, so that for example promise 2 doesnt have to 
//   wait for promise 1 to finish
