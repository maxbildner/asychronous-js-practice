// JS PROMISES NOTES
// From Video Tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E

// *****************************************************************************
// 1) Creating a new promise
// - takes in Exectutor function (which takes in two parameters)
// - Executor function is run when promise is created
// - Executor function takes in two functions automatically
//   - resolve()    function to run if promise succeeds
//   - reject()     function to run if promise fails

// Example 1:
let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a === 2) {
    resolve('Success')        // promises resovled value set to argument passed into resolve   
  } else {
    reject('Failed')          // promises rejected reason value set to argument passed into reject   
  }
})

// anything inside of .then is going to run for resolve
p.then((message) => {                       
  console.log('This is in the then ' + message);
}).catch((message) => {                           // catch will be run if promise is rejected
  console.log('This is in the catch ' + message);
})



// *****************************************************************************
// 2) Callback hell
// - callback inside of a callback, inside of a callback, ...
// - Promises are a way to avoid callback hell (makes it easier to read and no nesting)



// *****************************************************************************
// 3) Promise.all( [] )
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

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then(
    (messages) => {
      console.log(messages)   //=> ["Video 1 Recorded", "Video 2 Recorded", "Video 3 Recorded"]
    }
  )
// - will run all promises, and as soon as any are done, will run
//   .then and .catch methods depending if they suceed or fail
// - all promises run at same time, so that for example promise 2 doesnt have to 
//   wait for promise 1 to finish
