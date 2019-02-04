//variable declaration with let and const

////ES5
//var name5 = "Mike Smith";
//var age5= 23
//name5="Mike Miller"
//console.log(name5)
//
////ES6
//const name6 = "Mike Smith";
//let age6 = 23;
//
//console.log(name6);
//console.log(age6);

////1
//const:if value is not changing
//let:if value is changing
//
////2
//Variables declared with var in ES5 is function scoped , and the variables declared with let and const in ES6 are blocke-scope.

//ES5 cod.
//function driverLicense5(passedTest){
//    if(passedTest){
//        var firstName2 = "Mike";
//        var yearofBirth2 = 1990;
//    }
//    
// console.log(firstName2+ ", born in "+ yearofBirth2 +" is now officialy allowed to drive a car.")
//}
//driverLicense5(true);
//

//ES6 cod.
//function driverLicense6(passedTest){
//    let firstName2
//        const yearofBirth2=1970;
//    if(passedTest){
//       let firstName2 = "Mike";
//        
//       
//    }
//     console.log(firstName2+ ", born in "+ yearofBirth2 +" is now officialy allowed to drive a car.");
//}
//
//driverLicense6(true);

//var i = 23;
//for(var i=0;i<5 i++){
//    console.log(i);//0 1 2 3 4
//}
//
//console.log(i);// 5

//let i = 23;
//for(let i=0;i<5; i++){
//    console.log(i);//0 1 2 3 4 let blocke-scoped.
//}
//
//console.log(i);//23

//let i = 23;
//let sum=0;
//for(let i=0;i<5;i++){
//    console.log(i);
//    sum=sum+i;
//}
//console.log(sum);
//console.log(i);
///////////////////////////////////////

/*                    strings
var a =10;
var b =10;
console.log("JavaScript appeared "+" "+(a+b)+" years ago.")

                   
                   Templet string
console.log(`JavaScript appeared ${a+b} years ago.`)

This Is Mike Smith.He was born in 1970.Today, he is 48 years old.

let firstName="Mike";
let lastName = "Smith";
const birthYear= 1970;
function calcAge(year){
    return 2018-year;
}

console.log(`This Is ${firstName} ${lastName}. He was born in ${birthYear}, he is ${calcAge(birthYear)}.`);


let fName = "Mike";
let lName = "Doe";

const n= `${fName} ${lName}`;//starts with string ends with string

console.log(n.startsWith("D"))//f
console.log(n.endsWith("oe"))//t
console.log(n.startsWith("Mik"))//f
console.log(n.includes(" "))//t
console.log(fName.repeat(5))//MikeMikeMikeMikeMike
console.log(`${fName} `.repeat(5))//Mike Mike Mike Mike Mike
console.log(`${fName} ${lName} `.repeat(5))//Mike Doe Mike Doe Mike Doe Mike Doe Mike Doe

                 Arrow function
ES5
*/
//var a =function(a){
//    return a;
//}
//
////ES6
// let x = a => a;//Arrow functions---   =>
//console.log(x(2));

//If we do not have any parameters

//ES5
//var y = funtion(){
//    console.log("Hello");
//}

//ES6
//let y=()=>{console.log("Hello")}
//y();

//If we have multiple parameters
//ES5
//var z=function(a,b,c){
//    return a+b+c;
//}
//console.log(z(1,2,3));
//
////ES5
//let k=(a,b,c)=>a+b+c;
//console.log(k(1,2,3));

//         map()method explication-(new array)         
//var array1=[1,4,5,14];
//let map1=array1.map(x=> x*2)
//console.log(map1)//[2, 8, 10, 28]
//
//
//const years= [1990,1965,1982,1957];
//let ages6 = years.map(el =>2018-el);
//console.log(ages6);
//
////Task
//var materials = [
//    "Hidrogen",
//    "Helium",
//    "Lithium",
//    "Beryllium"
//]
//console.log(materials.map(material=> material.length));
//
////Arrow functions can not be used as a constructor and will throw an error when used with new.
//
//var Foo=()=>{}
//var foo = new Foo()//undefined 
//

//Arrow functions do not have a prototype property

//var Foo = ()=>{};
//console.log(Foo.prototype);//undefined

//////////////////////

//Destructuring- 
//Destructuring-  is a JS expression that make it possible to unpack values from array, or properties form object , into distinct variables.

// ES5
//var john=["john",26];
//var name=john[0];
//var name=john[1];
//ES6

//let [name,age]=["john",26]
//console.log(name);
//console.log(age);

//const obj={
//    firstName:"Mike",
//    lastName:"Doe"
//}
//
//const {firstName,lastName} = obj;
//console.log(`${firstName} ${lastName} `) //unpack
//
//function calcAgeRet(year){
//    const age= new Date().getFullYear()-year;
//    return[age,65-age];
//}
//const [age2,retirement]=calcAgeRet(1990)
//
//console.log(age2);
//console.log(retirement);



////////////////////////////////////////////////////////////




//Array ES6
//var x = Array.from("Javascript");//splits in rows Array.from
//console.log(x)

////ES5
//var ages = [12,17,8,21,14,11];
//var full = ages.map(function(cur){
//    return cur>=18
//})
//console.log(full)//returns true and false for each number
//console.log(full.indexOf(true))//returnes index number 3
//console.log(ages[full.indexOf(true)]);21
//
//
////ES6
////1findIndex()= returnes the index of the first element in the array that satisfies the provided texting functions

//var ages = [12,17,8,21,14,11];
//console.log(ages.findIndex(cur=>cur>=18));//returns index number 3
//
//
////2find()= returns the value of the first element in the array that satisfies the provided testing function 
//
//console.log(ages.find(cur=>cur>=18))//returns index num value 21
//
////for...of loop

//let myArray = [10,20,30];
//for(let x of myArray){
//    x+=1;
//    console.log(x)//returns elements in array one by one
//}
//

//let list = [4,5,6];
//for(let i in list){
//    console.log(i)//print index number in array (for ...in)
//}
//
//for (let i of list){
//    console.log(i)//prints element of array 4,5,6(for... of)
//}


// Spread Operator -extend over a large or increasing area.
//let mid = [3,4];
//let arr = [1,2,mid,5,6];
//console.log(arr);//output [1,2,[3,4],5,6];lengh 5
//
//let arr2 = [1,2,...mid,5,6];
//console.log(arr2)//[1, 2, 3, 4, 5, 6]
//ES5
//function addFourAges(a,b,c,d){
//    return a+b+c+d
//}
//
//let sum1=addFourAges(10,20,30,40);
//console.log(sum1)

//If I have those ages in an array how ca I pass it to function
  //ex1
//function addFourAges(a,b,c,d,){
//    return a+b+c+d;
//}
//let ages=[10,20,30,40];
//let sum=addFourAges(...ages);
//console.log(sum);
//
//
//   //ex2
//let ages=[10,20,30,40]
//let sum=(a,b,c,d)=>a+b+c+d;
//console.log(sum(...ages));

//Rest operator 

//function sumAll(...args){
//    let sum=0;
//    for(let arg of args){
//        sum+=arg;
//    }
//    return sum;
//}
//console.log(sumAll(1));
//console.log(sumAll(1,2));
//console.log(sumAll(1,2,3));

//Task
//ex1
//function multiply(multiplier,...theAges){
//    return theAges.map(function(element){
//        return multiplier*element;
//    });
//}
//
//var arr = multiply(2,1,2,3);
//console.log(arr);

//ex2
//let multiply=(multiplier,...theAges)=>theAges.map(element=>multiplier*element);
//var arr = multiply(2,1,2,3);
//console.log(arr);


//Map

//The map object hold key-value pairs.Any value(both object and primitiv values) may be used as either a key or a value

//var myMap = new Map();
//myMap.set("keyString","value associated with the string");
//myMap.set("keyObj","value associated with keyObj");
//myMap.set("keyFunc","value associated with keyFunc");
//
//console.log(myMap.size)//returns size of objects 3
//
//console.log(myMap.get("keyString"));
//console.log(myMap.get("keyObj"))
//console.log(myMap.get("keyFunc"))//maping

//let question = new Map();
//question.set("question","what is the official name of the latest JS version");
//question.set(1,"ES5");
//question.set(2,"ES6");
//question.set(3,"ES2015");
//question.set("correct","true");
//question.set(true, "correct");
//
//console.log(question.get("question"));
//console.log(question.size);
//
//for(let [key,values]of question.entries()){
//    console.log(`This is ${key},and it is set to ${values} `);
//}


