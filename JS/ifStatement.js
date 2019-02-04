/*var numberOfWaterMelon = 20;

if (numberOfWaterMelon>=20){
    console.log("I have 20 or more watermelon.")
}
*/



/*var firstName = prompt("Enter your name");
var status = prompt("enter your status");

if(status == "Married"){
    console.log(firstName + " is married");
}*/



//Ask user to enter temp of the room.Temp between 70 and 80 is an ideal temp.
/*var temp;
temp= prompt("enter temp of room");
temp= parseInt(temp);

if((temp>=70)&&(temp<=80)) {
    console.log("Ideal temp")
}*/
 



//allow user to input his/her age. Then the program will show if the person is eligible for //vote. A person who is eligible to vote must be older than or equal to 18 years old.

/*var age;
age = parseInt(prompt("Enter your age"));

if(age>=18) {
    console.log("Age is elogible for vote" )
}*/




/*//Write a js program thatwill accept three numbers and return the greatest number.
var num1, num2, num3;
num1 = parseInt(prompt("Enter first number"));
num2 = parseInt(prompt("Enter second number"));
num3 = parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    console.log("num1:" + num1+ " is the greatest number.");
}
if(num2>num1 && num2>num3){
    console.log("num2: "+ num2 + " is the greatest number.");
}
if(num3>num1 && num3>num2){
    console.log("num3: " + num3 +" is the greatest number");
}

*/


/*//will accept two numbers and check if two numbers are equal or not.
var num1, num2;

num1 = parseInt(prompt("Enter num1"));
num2 = parseInt(prompt("Enter num2"));

if(num1==num2){
    console.log("the number are equal")
}
 if(num2!==num1){
     console.log("the numbers are not equal")
 }
*/



/*Revenue can be calculated as the selling price of the product times the quantity sold, i.e. revenue = price*quantity.write a program that asks the user to enter product price and quantity and then calculate the revenue.If the revenue is more than 5000 a discount is 10% offered.Program should display the discount and net revenue */
/*var revenue, prod_price, quantity;
var discount;

prod_price = parseInt(prompt("Enter product price"));
quantity = parseInt(prompt("Enter quantity"));

revenue = prod_price * quantity;
if(revenue>5000){
    discount = revenue*10/100;
    revenue = revenue - discount;
    
}
console.log(discount);
console.log(revenue);*/

//IF ...ELSE STATEMENT

/*var firstName = "Mike";
var status = "Married";

if(status == "Married"){
 console.log("Mike is married");   
}else{
    console.log("Mike is single")
}*/
    
/*var numberOfWatermolon = 20;
if(numberOfWatermolon>20){
    console.log("I have more than 20 watermelon");
}else {
    console.log("I do not have not have more than 20 watermelon");
}*/

//we are checking if we can have free shipping from amazon or not when we order
//you have membership->yes
//order amount>$40 >yes

/*var membership, amount;
amount = 40;
membership = true;

if(membership == true || amount>40){
    console.log("free shipping");
}else {
console.log("no free shipping");
}

*/




/*
//num1 is not greater than num2

var num1, num2;

num1=parseInt(prompt("Enter num1"));
num2=parseInt(prompt("Enter num2"));

if(num1>num2){
    
    console.log(num1+"is greater than"+ num2)
}else{
    console.log(num1+" is not greater than"+num2)
}
*/

/*var morning, afternoon, evening;
morning=parseInt(prompt("What time is this morning"));
afternoon= parseInt(prompt("What time is this afternoon"));
evening = parseInt(prompt("What time is this evening"));

if(morning<12 || morning< afternoon){
    console.log(morning+"Good morning")
}else {
    console.log(afternoon + "Good afternoon")
}
    */

/*var hour = 8
if (hour<12){
    console.log("good morning");
}else{
    if (hour< 15){
        console.log("Good afternoon");
    }else{
        console.log("Good evening");
    }
}
*/


// If ...Else if...else statement

/*Program to display days
1-Monday
2-Tuesday
3-wednesday
4-thursday
5-Friday
6-Saturday
7-Sunday*/


/*var day =1;
if (day == 1){
    console.log("mo");
}else if(day==2){
    console.log("tue");
}else if(day==3){
    console.log("wed");
}else if(day==4){
    console.log("th");
}else if(day==5){
    console.log("fr");
}else if(day==6){
    console.log("sat");
}else if (day==7){
    console.log("sun");
}else {
    console.log("not a valid day")
}*/


/*var num1, num2,num3;
num1=parseInt(prompt("Enter num1"));
num2=parseInt(prompt("Enter num2"));
num3=parseInt(prompt("Enter num3"));
if(num1 > num2 && num1>num3){
    console.log("num1 is greater one");
}else if(num2>num1 && num2>num3 ){
    console.log("num2 is greater one ");
}else if (num3>num1 && num3>num2){
    console.log("num3 is greatest one");
}else{
    console.log("numbers are equal");
}
*/
//How can you find if a number is odd or even in javascript. Please //give an example/write syntax


/*Question-1

Write a javascript program for following logic.
    if marks < 60, then print "Fail"
    if marks >= 60 but less than 90 , then print "Pass"
    if marks >= 90, then print "Passed with Distinction"

You are free to use any combination of if - else statements.
//You can either use if statements OR if - else statements OR if - else if - else statements.

//Extra marks if you can solve using all 3 combinations :)*/



*/ 



/*the marks obtained by a student in 3 different subjects are input by the user.Your program should calculate the average of subjects.The student gets a grade as per the following rules 
var average,sub1, sub2,sub3;

sub1 = parseInt(prompt("Enter your mark for student"));
sub2 = parseInt(prompt("Enter your mark for student"));
sub3 = parseInt(prompt("Enter your mark for student"));

if ( (sub1<0 || sub1>100 || sub2<0 ||sub2>100 || sub3<0 || sub3>100 )){
    console.log("Enter valid point";)
}else{
    
average = (sub1+sub2+sub3)/3;
if (average>=90 && average<=100){...}else if(average>=80 && average<=89){
    console.log("your grade will be B")
}else if (average>=70 && average<=79){
    console.log("Your grade will be C")
}else if (average>=60 && average<=69){
    console.log("Your grade will be D")
}else if(average>=0 && average<59){
    console.log("Your grade will be F")
}else{
    console.log("Enter a valid grades for your subject")
}
*/





























