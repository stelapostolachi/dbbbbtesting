//Functions are first class object.Functions have the ability to:
//1-be assigned to variable.
//2-You can have ather functions in them.
//3-Return other functions to be called later.
//A Callback function is a function pass in to another function as an argument 
//let x = function(){
//    console.log("I am called from inside a function.");
//    
//}
//let y = function(callback){//parameter can be any name
//    console.log("Do somthing.");
//    callback();//this is your parameter name
//}
//
//y(x);
//
////let calc = function(num1,num2,calcType){
////    if(calcType=="add"){
////        return num1+num2;
////    }else if(calcType=="multiply"){
////        return num1*num2 
////    }
////}
////console.log(calc(1,2,"multiply"))
//
//let  add = function(a,b){
//    return a+b;
//}
//
//let multiply = function(a,b){
//    return a*b;
//}
//let calc = function (num1,num2,callback){
//    if(typeof callback=="function"){
//        return callback(num1,num2)
//       }
//   
//}
//
//console.log(calc(2,3,add))//returning function add
//console.log(calc(2,3,multiply))//returning function method multiply
//
//console.log(calc(2,3,function(a,b){//anonymous function 
//    return a-b
//}))

let students = [
    {name:"Mary",score:90,school:"East"},
    {name:"Ana",score:100,school:"east"},
    {name:"Criss",score:40,school:"East"},
    {name:"Jass",score:90,school:"West"},
    {name:"Gabe",score:85,school:"East"},
    {name:"James",score:95,school:"West"},
];

let processStudents = function(data,callback){
    for(let i=0;i<data.length;i++){
        if (data[i].school.toLowerCase()=="east"){
            if(typeof callback=="function"){
              callback(data[i]); //callback function x=data[i] 
            }
            
        }
    }
}

processStudents(students,function (x){
    if(x.score>60){
        console.log(`${x.name} Passed`)
    }
})

//write a function that computes the total of all the scores together for east and also account so how many students are in our east.


let determineTotal= function(){
    let total=0;
    let count=0;
    processStudents(students,function(x){
        total=total+x.score;
        count++;
    })
    console.log(`Total score: ${total}-Total count:${count}`)
}
determineTotal();



//                  
//                 //Closures
//function calculateRectangleAreaa(length,width){
//    return length*width;
//}
//var room=calculateRectangleAreaa(10,10);
//function youSayGBye(){
//    console.log("Good bye");
//    
//    function andISayHello(){
//        console.log("Hello");
//    }
//    return andISayHello;
//}
//
//var somthing=youSayGBye();
//console.log(somthing);
//somthing();
//
// //Closures get involved when the return inner function is not self contained(whenether the function is not depend from outside)
//
//
////function stopWatch(){
////    var startTime=Date.now();
////    function getDelay(){
////        var elepsedTime = Date.now()-startTime
////        console.log(elepsedTime)
////    }
////    return getDelay;
////}
////
////var timer = stopWatch(10)
////timer();
////JS runtime keeps track of all of yours variaables, memory usage,reference,and so.When it detects that an inner function relies on variables stores by an outer function, it ensure those variables are avalable even it the outer function goes away.
