/*Question1


var marks1;
marks1=parseInt(prompt("Enter your mark"));
if (marks1<60){
    console.log("Fail")
}else if(marks1>=60 && marks1<90){
    console.log("Pass")
}if (marks1>=90) { 
    console.log("Passed with Distinction")
}

Question2

var userName, password;
var username1=("Ana")
var password1=("Banana")
userName = prompt("Enter your userName");
password = prompt("Enter your password");

if (userName=="" && password==""){
    console.log("UserName and Password Fields cannot be empty")
}else if ( userName == "" && password != ""){
    console.log("UserName cannot be empty")
    
}else if (password !="" && userName==""){
    console.log("Password cannot be empty")
}else if(userName!= username1||password != password1){
    console.log("UserName or password is not valid. Please verify")
}else {
    console.log("User logged in successfull")
}

Question3*/

/*var num1, num2, operation;
num1 = prompt("Enter first number.");
num2 = prompt("Enter second number.");
operation = prompt("Enter what operation you want to do."); 

if (num1 ==="" || num2 === "") {
    console.log("Please enter valid number.");
}else if (operation==="") {
    console.log("Please enter valid operation.");
}else if (operation==="+") {
    console.log("Your result is "+num1+num2);
}else if (operation==="-") {
    console.log("Your result is "+num1-num2);
}else if (operation==="*") {
    console.log("Your result is "+num1*num2);
}else if (operation=="/") {
    console.log("Your result is "+num1/num2)
};*/

//Question 4


/*var income = parseInt(prompt("Please enter your Incame"));
income1=150000000
if (income <=0){
    console.log("Please enter a valid number")
}else if (income<=150000000){
    console.log("Your income is: " + income+ ". The tax amount you have to pay: "+(income*0.25));
}else if(income <=300000000){
    console.log("Your income is: " + income +". The tax amount you have to pay: "+((income1*0.25) +((income - income1)*0.30)));
}else if (income<=600000000){
    console.log("Your income is:" + income +". The tax amount you have to pay: "+((income1*0.25) + ((income-income1)*0.35)));
}else if(income<=1200000000){
    console.log("Your income is: " + income+ ". The tax amount you have to pay: "+((income1*0.25)+((income-income1)*0.40)));
}else if(income>1200000000){
    console.log("Your income is: " + income +". The tax amount you have to pay: "+((income1*0.25) + ((income-income1)*0.50)));
}*/
//Question5


/*var year = parseInt(prompt("please enter the year"));
if(year%400 == 0 && year%100 == 0){
    console.log("Leap year");
}else{
   if (year%4 ==0){
       console.log("Leap year");
       } else{
                console.log("this year is not Leap year");
           }
       }
*/
/*var year;
year=parseInt(prompt("Enter a year."));
if (year<=0){
    console.log("Not a leap!");
}else if (year % 100 === 0) {
    console.log("Leap year!");
}else if(year % 4 === 0) {
    console.log("Leap year!");
}else if (year % 400 ){
    console.log("Leap year!");
}*/


/*Telephone Bill
Write a JS program to calculate the monthly telephone bills as per the following rule: 
Minimum $200 for up to 100 calls. 
Plus $0.60 per call for next 50 calls. 
Plus $0.50 per call for next 50 calls. 
Plus $0.40 per call for any call beyond 200 calls

Question6*/

/*var manthlyBill=200;
var call=parseInt(prompt("Enter your calls number!"));
if ((call>0) && (call<=100)){
    console.log("Your monthly telehone bill is: "+manthlyBill)
}else if ((call>=100) && (call<=150)){
    console.log("Your monthy telephone bill is " + (manthlyBill + ((call-100)*0.60)));
}else if ((call>=150) && (call<=200)){
    console.log("Your monthly telephone bill is "+ (manthlyBill +((call-150)*0.50)));
}else {(call>200) 
    console.log("Your monthly telephone bill is "+(manthlyBill +((call -200)*0.40)));
}

//Question 1:
Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
Numbers divisible by 2 are even and numbers not divisible by 2 are odd
*/ 

/*var anyNumber2, remain2, evenOrOdd;
anyNumber2 = parseInt(prompt("Enter any number"));

remain2 = anyNumber2 % 2;
evenOrOdd = ((remain2 === 0 && "You picked " + anyNumber2 + " and your number is EVEN") || ("You picked " + anyNumber2 + " and your number is ODD"));
  
  //Assignment-4/switch statements
/*Question1
Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
Numbers divisible by 2 are even and numbers not divisible by 2 are odd.
var num;
num= parseInt(prompt("Enter number"));
switch(num%2==0){
        case(0):
        console.log(num+ " even number")
        break;
    default:
        console.log(num +" odd number")
}
Question2
Write a switch-case program that accepts a number from user.

IF number is 0,1 or 2 print "Low Number. IF number is 3,4,5 print "Medium Number". IF number is is not between 0-5 then print "Other Number
 
var num;
num =prompt("Enter number");
num=parseInt(num); 
switch(num){
    case 0: case 1: case 2:
        console.log(num + " Low Number")
        break;
    case 3: case 4: case 5:
        console.log(num + " Medium Number")
        break;
    default:
        console.log("Other Number")
}
        
Question3
Write a switch-case program that accepts the total cost of shopping from user and apply discount ratio according the below table. Print the total amount that user needs to pay after discount

var totalCost;
totalCost=prompt("Enter total cost.");
totalCost=parseInt(totalCost); 
switch(totalCost){
    case 1000:
        console.log(totalCost-((totalCost*5)/100));
        break;
    case 10000:
        console.log(totalCost-((totalCost*8)/100));
        break;
    default:
        console.log("Ather.")
}
 
/*
Question 4:

Write a program to display traffic light colors using following logic:
if code (R/r)-->"Red"
if code (O/o)-->"Orange"
if code (G/g)-->"Green"

var trafficLights;
trafficLights=prompt("Enter light color")
switch(trafficLights){
    case "R/r":
        console.log("Red")
        break;
    case "O/o":
        console.log("Orange")
        break;
    case "G/g":
        console.log("Green")
        break;
    default:
        console.log("No mor option");
        
}
*/

  
 /*var foodType;
foodType = prompt("Enter your favorite food");
switch(foodType) {
    case"Turkish" :
        console.log("You love kebab");
        break;
    case"Italian":
        console.log("You love pizza");
        break;
    case"Uyghur":
        console.log("You love laghman");
        break;
    default:
        console.log("no mor option");
        break;
                   
}          
        //Assignment-6/for loop  
          
 /*Question1
 Print the table of 12 using for loop.
Output should be in following format:

 var num=parseInt(prompt("Enter your num"));
for (var i=1; i<11; i++ ){
    console.log( num + "*"+ i + "="+(num*i));
}*/
          
 /* Question-3
Write a JavaScript program to print all the numbers between 1 and 100 (including 1 and 100)
which are divisible by 5.

for ( var i=0; i<=101; i++){
    if (i%5==0){
        console.log(i);
    }
}
        
  Question-4        
    Print the multiples of 5 starting from 200 to 5 with following restrictions:
1. Use for loop
2. Don't use modulus (%) operator to check whether number is divisible by 5 or not.      

for (var i=200; i>=5; i-=5){
console.log(i);
}



Question-2
Write a program to print Fibonacci series of n terms where n is input by user : 

0, 1, 1, 2, 3, 5, 8, 13, 21, 34,......


var number,num1,num2,num3; 
number=prompt("Enter your number");
num1=0;
num2=1;
num3=num1+num2;
console.log(num1);
console.log(num2);
for ( var i=3; i<=number; i++){
    num3= num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3;
    
}
    


//Assignment-5/while,do-while loop

Question-1
Use pre-decrement operator in while's boolean_expression to print HELLO 5 times on to the console.


var hello=5, a=" ";
while(hello>0){
 console.log("Hello" );
hello--;
  console.log("\n")      
}

Question-2
Write a program to calculate the sum of the numbers from 1 till upper bound. 
If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.

You should use while loop.



var upperBound = parseInt(prompt("Enter upper bound"));
var Num = 0;
var Sum1 = 0;

while(Num<upperBound){
    Num++;
    Sum1 = Sum1 + Num;
  
}console.log( Sum1 );

Question-3
Write a program using while loop to print Even numbers from 1 to 100.


var number=1;
while (number<=100){
    if(number%2==0){ 
        console.log(number);
    
 }
 number++
}



Question-4
Write a program for following logic:
Print all the odd numbers in comma separated form from 1 till end (you may change it):
if end = 10, OUTPUT = 1, 3, 5, 7, 9
if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11

You should use while loop and if - else statements. Note that, there should not be any comma after last digit.

var i, x,number;
number=parseInt(prompt("Enter a number"));
i = 2;
x = "1";


while (i<= number){
    if(i%2==1){
        x = x + "," + i;
    }
    i++
}console.log(x);



Question-1
Print following output using nested for loops:
1
22
333
4444
55555
666666
7777777


for (var i=0; i<=7; i++){
    var space="";
    for (var p=1; p<=i; p++){
        
        space=space+i;
    }
    console.log(space);
}

Question-2
Print following output using nested for loops.
/*
4     3     2     1

   3     2      1

      2      1

         1.

       
var  space = " " ;
for (var i=4; i>=1; i--){ //rows
    var blank ="";
    
    for (var j=i; j>=1; j--){ //colums
        blank =blank + j+ "  ";
        
        }
    if(i!=4){
    space = space + " ";
    console.log(space+blank);
    }else if (i!=1){
        console.log(blank);
    }
}
Q3

for (i = 1; i<=10;i++){
    var space = "";
    for (j = 1; j<=10;j++){
        space =space+ j*i + " ";
      }
    console.log(space);
      }
  Q-4
var w="W", b="B", backet=0;
for (var i=1; i<=8; i++){
    var space=" ";
for (var j=1; j<=4; j++){
    space= space+ w+ " "+ b+" ";
        
    }
    console.log(space);

backet=w;
    w=b;
    b=backet;
}


var i=0;
outer:
while(true){
    console.log("Outer while loop");
while(true){
    i++;
    console.log("i= "+i);
    if(i==1){
       console.log("continue");
        continue;
       }
    if(i==3){
       console.log("Continue outer");
        continue outer;
       }
    if(i==5){
        console.log("break");
        break;
    }if(i==7){
        console.log("break outer");
        break outer;
    }
}
}

for(var i=1; i<5;i++){
    for(var j=1; j<3; j++){
        if(i==1 && j==1){
            continue;
        }else if(i==2 && j==2){
            break;
        }else if (i==3 && j==2){
            continue;
        }else if(i==4 && j==2){
            break;
        }
        console.log(i,"", j)
        console.log(i);
    }
}

Q-1
var num1,num2,num3,times;

times=parseInt(prompt("how many times do you want to try?"));


for(var i=0;i<times;i++){
    
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    console.log(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    console.log(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    console.log(num3+ "is the largest");

}else{
    console.log("all numbers are equal");
}
    
}

Q-2
var num1,num2,num3;

do {
    
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    alert(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    alert(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    alert(num3+ "is the largest");

}else{
    alert("all numbers are equal");
}
  var continu=parseInt(prompt("Do you want to continue:\n 1-Yes \n 2-No")); 
}while(continu==1);
 alert("Thank you");




var num1,num2,num3,counter;
counter=0;
do {
    
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    alert(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    alert(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    alert(num3+ "is the largest");

}else{
    alert("all numbers are equal");
}
  var continu=parseInt(prompt("Do you want to continue:\n 1-Yes \n 2-No"));
    counter++;
}while(continu==1);
 alert("Thank you!, You have tried "+counter+ " times");

*/














