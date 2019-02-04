/*function sayHello(){
    console.log("Hello");
}
//sayHello();
for (var i=0; i<100;i++){//print Hello 100 times.
    sayHello();
}

//task,write a function that calculate the sum of 3 //num.

function calculateSum(){
    var num1, num2, num3;
    num1=6;
    num2=10;
    num3=11;
    console.log(num1+num2+num3)
}
calculateSum();



function convertkm(){
    var miles, km;
miles = prompt("enter miles to kilometers"); 
km=1.6*miles
console.log(km);
}
convertkm();//is calculating more times the same //question
convertkm();


// write a function that shows the greater number from 2 numbers.

function greaterNum(){
   var num1=parseInt(prompt("enter first number"));
   var num2=parseInt(prompt("Enter second number"));
    if (num1>num2){
        console.log(num1+" is greater then "+num2)
    }else if (num2>num1){
        console.log(num2+" is greater then "+num1)
    }
}
greaterNum();//run first time
greaterNum();//run second time

//var x=5;
//var y=10;

function calculateArea(width,height){//parameter
    var area = width * height ;
    console.log(area)
}
calculateArea(3,5)//argument
calculateArea(33,5)//works like prompt. 
//calculateArea(x,y)

 function hoursPay(hours,pay){
    var total=hours*pay;
    console.log(total);
}
hoursPay(40,15);
hoursPay(40,25);
hoursPay(40,45);

//Task/create a function that accepts 3parameters:
//1-number;2-number;3-operator(+-/,*)
function calculation(num1, num2, operators){
var total;
    if (operators=="-"){
        total=num1-num2;
        console.log(total);
    }else if (operators=="+"){
        total=num1+num2;
        console.log(total);
        
    }else if (operators=="*"){
        total=num1*num2
        console.log(total);
    }else if (operators=="/"){
        total=num1/num2;
        console.log(total);
            
        
    }
}

calculation(16,3,"+")
calculation(6,3,"-")
calculation(61,3,"*")
calculation(16,3,"/")

//write a function that accepts birthyear and displays the age in the connsole.
function ageCalcul(birthyear){
    console.log(2018-birthyear +" is your age girl!!") 
      
}
ageCalcul(1991)


function greatestNumber(num1,num2,num3){
if (num1>num2 && num1>num3){
    console.log(num1+ " Is greatest number.");
}else if (num2>num1 && num2>num3){
    console.log(num2+" Is greatest number.");
}else if (num3>num1 && num3>num2){
    console.log(num3 +" Is greatest number. ");
}else if (num1=num2 && num1==num3){
    console.log("Your numbers are equal")
}

}
greatestNumber(5,2,3)
greatestNumber(1,23,2)
greatestNumber(2015,200,1232)
greatestNumber(1,1,1)

Convert fahrenheit to celcium
function displayCelcius(fahrenheit){
var celcium=(fahrenheit-32)*5/9
console.log(celcium)
}
displayCelcius(50)
displayCelcius(80)

function calculategrade(grade1,grade2,grade3){
    var average=(grade1+grade2+grade3)/3
    if (average>=90 && average<=100){
        console.log( "Your grade is A");
    }else if(average<=80 && average>=89){
        console.log("Your grade is B");
    }else if (average>=70 && average<=79){
        console.log("Your grade is C")
    }else if (average>=60 && average<=69){
        console.log("Your grade is D")
    }else if (average>=0 && average<=59){
        console.log("Your grade is F ")
    }
    
}
calculategrade(100,100,100)
calculategrade(2,34,21)


var yourArray=[1,2,"apple","banana","strowbery"];

function findElement(myArray,element){
    for (var i=0; i<myArray.length; i++){
        if(myArray[i]==element){
            console.log("Found it")
        }else if (i==myArray.length-1){
            myArray.push(element);
    }
}
    console.log(myArray)
}

findElement(yourArray,"cocos")
///
function calculateArea (width,height){
    var area = width * height;
    return area;//
}
var wallOne = calculateArea(3,5);
console.log(wallOne)
//var wallTwo = calculateArea ()



///////

function calculateArea (width,height){
    var area = width * height;
    return area;
}
calculateArea(5,8)

function isChecked(){
    if(calculateArea(5,8)>15){
        console.log("valid");
    }else {
        console.log("not valid")
    }
}
isChecked


function valuesCalcul(values1,values2){
    var result=values1+values2
    return result;
}
var x=valuesCalcul(5,3)//to give a result need a //new variable.
var x1=valuesCalcul(22,21)
console.log(x);
console.log(x1);


function calculateAge(yearBirth){
    var age = 2018-yearBirth
    return age;
}

function yearsUntilRetirement(name,year){
    var retirement=65-calculateAge(year);
    console.log(name+ " retires in "+retirement+" years.")
       
}
yearsUntilRetirement("Stela",1990);

function addTen(a){
    return a+10;
}

function addTen(a,b){
    return a+b+10;
}
var result = addTen(100);
console.log(result);
//result is NAN

///////
function addTen(a,b){
    return a+b+10;
}

function addTen(a){
    return a+10;
}
var result = addTen(100);
console.log(result);

var add = function(a,b){
    return a+b

    
var result = add(10,20)
console.log(add)
 

var calcul = function(width,height){
    return width*height
}
var x = calcul(21,3)
console.log(x)
*/
//String manipulation method





































































