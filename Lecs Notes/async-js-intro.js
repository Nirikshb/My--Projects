// const mocktails = ["virgin mojito", "blueLagoon"];
// const myTimer = setTimeout(()=>{
//   console.log("i want to have a mocktail");
// }, 2000);
// if(mocktails.includes("virgin mojito")){
//   clearTimeout(myTimer);
// }

//Callback functions = there are those kinds of functions which can be called back after certain period of time
//or gets called back after certain peroid of time.
//call back is a function passed as an argument to another function
//when you pass a function as an arg, do not use parentheses
const sayHi = (friend) =>{
    console.log(`"hello" ${friend}`);
}

const greeting = (friend, callBackFn) =>{
    callBackFn(friend);
}
greeting("Ravi", sayHi);