// //Arithmetic Operators
// //Comparison Operators
// //Bitiwse Operators
// //Increment /  Decrement Operators
// // Logical Operator
// //  Ternanry Operator
// // Comma Operator

// console.log(2+3);//5
// console.log(2-3);//-1
// console.log(2%3);//2
// console.log(2*3);//6
// console.log(2/3);//0.666667

// //comparasion operator
// console.log(2>3);//false
// console.log(2<3);//true
// console.log(2>=3);//false
// console.log(2<=3);//true
// console.log(3<=3);//true

// // == and ===     != and !==
// // == and != always look for values only on both sides
// // === and ! == always looks for both the values and the datatypes
// console.log(3=='3');//true 
// console.log(3=='3');//false
// console.log(hari=='hari');//true
// console.log(hari==hari);//reference error
// console.log(3 !="3");//false

// //bitwise operator
// console.log(2&3);//2 
// console.log(2|3);//3
// console.log(!2);//true
// console.log(!0);//true
// console.log(!true);//false

// // Increment and Decrement Operator

// //postfix and prefix operators
// // postfix increment or postfix decrement // var a; a ++; a--
// // prefix increment or prefix decrement // var a, ++a; --a

// let a = 2;
// console.log(a++);// print the value of a, a=2 then goes for postfix operation// a+= // a+1// 2+1// a=3
// console.log(a);// a=3// till this point in time, a =3
// console.log(a++);//a =print the value as a =3// a++/a+1//3+1//a=4
// console.log(a);//a==4
// //prefix values
// console.log(++a);//++a//a+1//4+1//a=5// print value of a as 5

// //logical operator/ both side should be true
// // &7 , || , !

// console.log(5 &&3);
// console.log((2>3) && 3+1));
// //left side value if 0, then the o/p is 0
// // left side value if false, then the o/p is right side value
// // left side value if true, then the o/p is right side value

// console.log(5 || 3);//true
// console.log(false||true);//true
// console.log(0 || 3+1);//true
// console.log(2>1 || 3>2);//true
// // left side value is false, then output os right side value
// // left side value is zero, then output os right side value
// // left side value is Nonzero, then output is nonzero left side value
// // left side value is Nonzero, then output is nonzero left side value
// // left side value if true, then output is true

// //ternanry operators
// //conditon ? for true, this statement will be executed : for false this statement will be executed
// // condition ? statement 1 : statement 2  
// // any one of the statement is executed of the two, depending on the condition's value i.e true/ false

let b = 3;
b > 4 ? console.log(" b is greater than otehr number") : console.log(" b is smaller than othe no.")

((b > 2) && (b++) ? console.log(b++) : console.log(++b));

// Comma operator
//gives most prefernce value to right most value
let x = (6,7);
console.log(x);

x = (x++, x++, x);
console.log(x);//10


// this keyword;

// this refers to object in which it's used.
//Normally refers  to the window object only, whether in strict mode or not it can have diffrent values as per
//method we call it or invoke it. if inside the function, 'this' points to 
// global object[windonw]. if used in strict mode then will be undefined.
//learned template literal to give statemnts
const student = {
    fName : "Ram",
    lName : "Kumar",
    fullName(){
        console.log(`${this.fName} ${this.lName}`);
    }
}
student.fullName();
let myName = "sid";
// if variable is declared with var keyword or no keyword then it becomes
//the property of window object, else for a let and comst, it dont become the 
// property for window object
'use strict'
console.log(this);// window object

function Hello(){    
    console.log(this);
}

//strict basically allows us to us to write code in strict format
'use strict' 
myAge = 27;
 console.log(myAge);

 //Getters and Setters

 const employee ={
    fName : "Ramesh",
    lName : "Thakur",
    fullName(){
        console.log(`${this.fName} ${this.lName} is the employee's name`);
    },
    set fullName(value){
     const names = value.split(" ");
     this.fName = names[0];
     this.lName = names[1];
    }
 }
// console.log(employee.fullName);
// employee.fullName;
//  console.log(employee.fName);

 employee.fullName = "Manoj Thakkar";
console.log(employee);