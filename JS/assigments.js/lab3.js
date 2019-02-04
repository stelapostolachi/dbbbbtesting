/*Question-1

Write a javascript program for following logic.
    if marks < 60, then print "Fail"
    if marks >= 60 but less than 90 , then print "Pass"
    if marks >= 90, then print "Passed with Distinction"

var marks=parseInt(prompt("Enter number"));

if (marks<60){
    console.log("failed");
}else if (marks<90){
    console.log("Pass");
}else {
    console.log("Pass with distinction");
}

Login Functionality Logic
   UserName,Password
   --- > Program will ask to enter username and password
   --- > If both username and password are blank
       -- > "UserName and Password Fields cannot be empty"
   --- > If userName is blank and password is not blank
       -- > "UserName cannot be empty"
   --- > If userName is not blank and password is blank
       -- > "Password cannot be empty"
   --- > If the username or password is not valid
       -- > "UserName or password is not valid. Please verify"
   --- > If the username and password are both valid
       -- > "User Logged in successfully"

var username, password, expectedUserName, expectedPassword;
username=parseInt(prompt("Enter your username"));
password=parseInt(prompt("Enter your password"));
expectedUserName="abc"
expectedPassword=123
if ((username=="") && (password=="")){
    console.log("UserName and Password Fields cannot be empty");
}else if ((username=="")&&(password!="")){
    console.log("Password cannot be empty");
}else if ((username!="") && (password=="")){
    console.log("Password cannot be empty");
}else if ((username!=expectedUserName)&&(password!=expectedPassword)){
    console.log("UserName or password is not valid. Please verify");
}else if ((username==expectedUserName)&&(password==expectedPassword)){
    console.log("User Logged in successfully");
}


Question-3

Calculator Logic with 2 numbers
    User is able to enter 2 numbers
    User is able to enter one of these operators:
        +,-,/,*
    Program needs to perform the operation and display the result
    If either number1 or number2 is blank:
        "Please enter valid numbers"


var num1, num2, operators;
num1=parseInt(prompt("Enter your first number: "));
num2=parseInt(prompt("Enter second number: "));
operators=prompt("Enter your operator");
if ((num1=="")|| (num2=="")){
    console.log("Please enter valid numbers");
}else if (operators=="*"){
    console.log(num1*num2);
}else if (operators=="/"){
    console.log(num1/num2);
}else if (operators=="+"){
    console.log(num1+num2)
}else if (operators=="-"){
    console.log(num1-num2)
}


Question4
Tax Calculator:

    - Let user enter his income

    - Calculate the tax amount according to below table

    - Print the tax amount

Income	Tax Ratio
income ≤150,000,000	%25
income ≤ 300,000,000	%30
income ≤ 600,000,000	%35
income ≤ 1,200,000,000	%40
income > 1,200,000,000	%50
Sample Output-1

Your Income : 1500

The tax amount you have to pay : 375.0

Sample Output-2

Your Income : 1200000

The tax amount you have to pay : 300000.0

Note: IF Your Income is 200,000,000, your tax will be calculated this way: %25 for 150,000,000 and %30 for the rest of the amount which is 50,000,000

var income, tax,t1,t2,t3,t4;
t1=150*0.25;
t2=150*0.30;
t3=300*0.35;
t4=600*0.40;
income=parseInt(prompt("Enter yourincome"));
if (income is <150){
    tax=income*0.25
}else if (income<=300){
    tax=t1+(income-150)*0.30
}else if (income <=600){
    tax=t1+t2(income-300)*0.35;
}else if (income<=1200){
    tax=t1+t2+t3+(income-600)*0.40
}else {
    tax= t1+t2+t3+t4(income-1200)*0.50
}
console.log("Your income is: "+income);
console.log("Your tax is: +tax"+tax)


Question-5
Any year is input by the user. Write a program to determine whether the year is a leap year or not.
Leap Years are any year that can be evenly divided by 4.  A year that is evenly divisible by 100 is a leap year only if it is also evenly divisible by 400.

Example : 
1992      Leap Year
2000      Leap Year
1900      NOT a Leap Year


var year=parseInt(prompt("Enter year"));
if ((year%4==0 && year%100!=0) || (year%400==0)){
    console.log("Year"+ year+"is leap year");
}else{
    console.log("year"+year+"is not a leap year")
}


Telephone Bill
Write a JS program to calculate the monthly telephone bills as per the following rule: 
Minimum $200 for up to 100 calls. 
Plus $0.60 per call for next 50 calls. 
Plus $0.50 per call for next 50 calls. 
Plus $0.40 per call for any call beyond 200 calls.

var call,monthBill;
call=parseInt(prompt("Enter your calls per month"))
if (call<+100){
    monthBill=200;
}else if (call<150){
    call=call-100;
    monthBill=200+(calls*0.60);
}else if (call<=200){
    call=call-150
    monthBill=200+(50*0.6)+(call*0.5);
}else{
    call=call-200;
monthBill=200+(50*0.6)+(50*0.5)+(call*0.4);
}

console.log("Your total bill:"+ monthBill);


*/
