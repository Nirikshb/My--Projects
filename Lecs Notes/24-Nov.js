//Async/Await :-
// Async : - Its a special method to work with promises in JS. A function can be made asynchronous by adding the
// async keyword to it. An async function always returns a promise. So, async ensures that the function returns
// a promise and wraps the non promises in it.

// async function add(a,b){
//     console.log(a+b);
// }

// const add = async() => {
// let a = await anyFunction;
// }

// Await: - This is another keyword that works inside async "functions" only.
// The await keyword makes javaScript wait until the promise is settled and returns a value. It makes
//it easy to read and use promises efficiently.

// Async and Await works together.

// // async
// async function weatherUpdate() {
//   let bombayWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('The temp in Bombay is 33 deg celsius')
//     }, 0)
//   })

//   let kolkataWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('The temp in kolkata is 33 deg celsius')
//     }, 0)
//   })
//   // bombayWeather
//   // .then ((res) => {
//   //     console.log(res);
//   //        })
//   // .catch ((err) =>  {
//   //     console.log(err);
//   //        })

//   // kolkataWeather
//   // .then((res) => {
//   //     console.log(res);
//   // })
//   // .catch((err) => {
//   //     console.log(err);
//   // })

//   console.log('Getting weather details of Bombay')
//   let bombay = await bombayWeather
//   console.log('Got weather details of Bombay')

//   console.log('Getting weather details of Bombay')
//   let kolkata = await kolkataWeather
//   console.log('Got weather details of Kolkata')

//   return [bombay, kolkata]
// }

// const printSomething = () => {
//   console.log('Hey i am printing any cas things out here')
// }
// async function mainFunction() {
//   await weatherUpdate()
//   weatherUpdate()
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   await printSomething()
// }

// mainFunction()

// const shopping = async () => {
//   try {
//     const task1 = await addItemsToCart('Jeans & Shirts')
//     console.log(task1)

//     const task2 = await makePayment('1050/-')
//     console.log(task2)

//     const task3 = await orderSummary('Ordered Jeans & Shirts')
//     console.log(task3)
//   } catch (err) {
//     console.log(err)
//   }
// }
// shopping()


// Event loop & Task Qeueu
//Javascript
// Event Loop;
//1. Js is single threaded lang, non-blocking, async lang.
//2. It has a call stack, event loop, callback queue & other api
//3. v8 engine has callstack and a heap(allows us to store value)
//4. heap is used for memory allocation and the stack holds the execution content.
// dom, settimeout, xml, http requests, dont exist in v8 source code.
//js doesnt wait for anything. 
//async never waits
//event loop is responsible for executing code, collecting and processing 
// the events and executing the queued tasks;
//event loop pushes the waiting tasks queue to the call stack in the order theyre inserted
//onky if the call stack is found empty
//setTimout(() =>{}, 0) callback, timer stll will be queued by the event loop

//taskQueue info
// task Queue :- Js can do only one thing at a time
//rest are queued to the task queue waiting for current executing task to finish
// when we run set timeout, webAPi's run a timer after the timer is finished, it pushes
// the set timeout in the task queue.
//these waiting tasks in the queue are then pushed in to the call stack by the
//event loop where they can be executed
//web api a store room


