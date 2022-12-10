
//promise - an object that is used as a placeholder for future result of an async operation
// it's a container of a future value for an async operation.

//any promises is first in a pending stage --> settled stage
//can take you into fulfilled promises
// or rejected

//state(fulfilled/rejected) and result(result/err)

// const url = "somethingurl";
// let b = fetch(url);
// console.log(b);

//if data is fetched correctly then it gives u status of 200,
//if not got then 404 and if there is some connection issue then it gives us
//500: internal server error

//one way to write promises normal let promise wala
let promise = new Promise((resolve,reject=>{
    setTimeout(() =>{
        reject("hey i am rejecting the promise");
    }, 2000);
}))

promise
.then((resolve) =>{
    console.log("resolved", resolve);
})
.catch((err)=>{
    console.log("rejected",err);
})
//second way to write promises calling function
function callingPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("hey rejecting promsis");
        }, 2000);
    })
}
callingPromise();
.then((resolve)=>{
    console.log("resolved:", resolve);
})
.catch((err) =>{
    console.log("rejected:", err);
})


// let promise = new Promise((resolve, reject)=>{
//     const url="";
//     let result = fetch(url);
//   console.log(result);  
//   result
//   .then((res) =>{
//     console.log(res);
//     if(res.status == 200){
//         resolve(res);
//     }
//     else {
//         reject(new Error(res))
//     }
//   })
// })

// promise
// .then((result)=>{
//     console.log(result);
//     let responseView = result.json();
//     return responseView;
// })
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })

