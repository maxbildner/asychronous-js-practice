// NOTES FROM CODECADEMY ASYNCHRONOUS JAVASCRIPT COURSE
// *****************************************************************************
// 1) JavaScript PROMISE
//   - JS Objects that are the outcome of an asynchronous operation
//   - Can have one of three states:
//      - Pending = initial state.Operation not completed
//      - Fulfilled = operation has completed (Settled)
//      - Rejected = operation has failed(error) (Settled)
//   - Settled = promise is no longer pending (fulfilled or rejected)


// *****************************************************************************
// 2) new Promise( executor )   => Promise Object
// - executor function is run when promise is created
// - executor usually starts an asynch operation (ex. get data from external 
//   database, or api to fetch data)
// - executor automatically passed in resolve() and reject() functions
// - resolve() = changes promise's status from pending to fulfilled. 
//   promise's resolved value set to argument passed into resolve
// - reject(error) = changes promise's status from pending to rejected, and the 
//   reason set to the argument passed into reject()
const executorFunction = (resolve, reject) => {

};

// executor function is run when promise is created
const myFirstPromise = new Promise(executorFunction);


// *****************************************************************************
// 3) setTimeout(CB, delay)
// - node API
// - CB = CallBack function that executes in "at least" delay seconds 
// - delay = number in miliseconds (actual delay could be more)
// - delayed CB is performed asychronously. I.e. rest of the code will continue 
//   running. 
// - after delay seconds, CB is added to a CB queue. Before the CB can run, 
//   any synchronous code from the program will run first. Next, any other CB's
//   infront of the CB in the queue will run. This means that it might be more
//   than delay seconds before the CB is actually executed
// 
// Example 1: guess what is printed to the console it what order
// console.log('a');

// function foo() {
//   console.log('b');
// }

// setTimeout(foo, 0);

// console.log('c');

// Answer: 'a', 'c', 'b'



// *****************************************************************************
// 4) PromiseObj.then( onFulfilled, onRejected )  => PromiseObj
// Parameters:
// - PromiseObj = Promise Object
// - onFulfilled = optional callback that runs if promise settles to Fulfilled
//      - this CB automatically takes in the resolvedValue of the promise
// - onRejected = optional callback that runs if promise settles to Rejected 
//      - this CB automatically takes in the rejectedReason of the promise
// Returns:
// - a settled promise
//   - a promise with same settled value as the promise it was called on 
//     if no callbacks provided
//   - can chain resolved logic from rejected logic
//
// Example 1:



// *****************************************************************************
// 5) ___.then( onFulfilled ).catch( onRejected )
// - same as above #4, but separating logic to handle promise success/rejection
// - ___ = promise object
// - onFulfilled = call back that runs if promise settles to fulfilled
// - onRejected = callback that runs if promise settles to rejected 
// - ? returns a settled promise ?


// *****************************************************************************
// 5) COMPOSITION = Chaining .then's
// - useful for handling multiple asynchronous events where order matters
//   ex. checkAvailability of item, purchaseItem, checkUserHasCash, Purchase
// - syntax:
//    ___.then( ).then( )
// 
// Example (non-working):
// firstPromiseFunction()
//    .then((firstResolveVal) => {
//      return secondPromiseFunction(firstResolveVal);
//    })
//    .then((secondResolveVal) => {
//      console.log(secondResolveVal);
//    });
// - Note the return value in the callbacks.To ensure that the return value for 
//   the first.then() was our second promise rather than the default return of a 
//   new promise with the same settled value as the initial


// *****************************************************************************
// 6) COMPOSITION COMMON MISTAKES
// 
//    #1) Nesting promises instead of chaining them
firstPromise()
.then(firstResolvedVal => {
  return secondPromise(firstResolvedVal)
    .then(secondResolvedVal => {                // !
      console.log(secondResolvedVal);
    })
})

//    #2) Forgetting to return a promise
firstPromise()
.then(firstResolvedVal => {
  secondPromise(firstResolvedVal)               // !
})
.then(someVal => {
  console.log(someVal);
})



// *****************************************************************************
// 7) Promise.all( [] )
// - [] = an array of promises
// - returns a single promise
//    - if all promises resolve, will return a promise with an array containing 
//      resolve value from each promise
//    - if any promises reject, will return a promise that immediately rejects
//      with the reason that promise rejected (failing fast)
//
// Example:
// Promise.all([checkSunglasses, checkPants, checkBags])
//   .then(onFulfill)
//   .catch(onReject)