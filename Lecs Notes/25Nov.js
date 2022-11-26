// // https://jsonplaceholder.typicode.com/todos/


// const promise = new Promise((resolve, reject) => {
//     const api = "https://jsonplaceholder.typicode.com/todos/";
//     const result = fetch(api);
//     console.log(result);
//      resolve(result);    
    
// })

// promise .then((result) =>{
//     console.log(result)
// })

// // end part 
// const multiply = (a,b) => {
//     console.log(a*b);
// }

// const multiplyByTwo = multiply.bind(this, 2);

// multiplyByTwo(4);//2*4

// const multiplyByThree = multiply.bind(this,3);
// multiplyByThree(3);

const numbers = [1,2,3,4,5,6,7];
numbers.forEach(item, index, arr) =>{
    console.log('a['+index+']='item);
 
}