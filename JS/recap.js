1 question
var lastName, firstName, salary;
lastName="Postolachi";
firstNameirstName="Stela";
salary="$100k";
console.log("Hi! My name is "+FirstName+" "+lastName+" and my salary is "+ salary);


var hourlyRate, hours;
hourlyRate=parseInt(prompt("Enter your hourly rate."));
hours=parseInt(prompt("Enter how many hours you worked this week"));
console.log("You worked "+ hours+ " this week and you made "+ hourlyRate*hours+"$.");


var num1, num2, num3,num4,average;
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));
num4=parseInt(prompt("Enter forth number"));
average=(num1+num2+num3+num4)/4;
console.log(average);

var num;
num=parseInt(prompt("Enter your number"));
if (num%2==0){
    console.log("Even number"+num);
}else{
    console.log("Your number is odd");
}



var num1,num2;
num1=parseInt(prompt("Ente your number1."));
num2=parseInt(prompt("Enter second number"));
if (num1==num2){
    console.log("Your numers are equal");
}else {
    console.log("Not equal numbers");
}


 var score;
score=parseInt(prompt("Enter score of student"));
if(score<0 || score>100){
    console.log("Enter valid score");
        
}else if (score>90 ){
    console.log("A");
}else if(score>80){
    console.log("B");
}else if(score>70){
    console.log("C");
}else if (score<70){
    console.log("F");
}



var revenue,price,quantity;
price=parseInt(prompt("Enter product price."));
quantity=parseInt(prompt("Enter your quantity."));
revenue=price*quantity
if (revenue<3000){
    console.log("No discount");
}else if(revenue>=3000 && revenue<5000){
    (revenue=revenue-(price*0.15)+price);
    console.log(revenue);
}else if(revenue>5000){
    (revenue=revenue-(price*0.25)+price);
    console.log(revenue);
}else if (revenue>=10000){
    (revenue=revenue-(price*0.60)+price);
    console.log(revenue);
}

/*
var carModel=prompt("What is your car model.");
switch(carModel){
    case"Toyota":
            console.log("Good for uber");
            break;
    case"Ferrari":
            console.log("Good for race");
            break;
    case"Mercedes":
            console.log("Good for luxury")
        break;
    default:
        console.log("Not a good choice");
        break;
    }


for (var i=1; i<=20; i++){
    
    console.log("I will fiind $100 job in 5 months!!!")
}



//Multiplication 1*2=10 1 loop
var number=parseInt(prompt("Enter your number"))
for (var i=1; i<=10; i++ )
    
    console.log( number + "*"+ i + "="+(number*i));{
 
    }


var i=0;
while (i<15 ){
    console.log(i);
    i++    
}

//result 123456789



Print all numbers between 1 and 100 that are dividible by 5 or 7;

for (var i=1; i<=100; i++){
    if (i%5==0 || i%7==0);
        console.log(i);
}


var i=0;
while (i<100){
    if (i%5==0 || i%7==0)
    console.log(i);
    i++
}





var counter=0
for (var i=0; i<5; i++){
    var num=parseInt(prompt("Enter your num"))
    
    if (num>=10 && num<=20){
         counter++ 
      }
}
    console.log(counter);

Print the quantity of numbers between 1 and 50 that are divisible by 3 and 5;


numbers=0;
for ( var i=1; i<=50; i++){

    if (i%3==0 || i%5==0){
        numbers++; 
    }
      
}
console.log(numbers); 



var total=0;
do {
    var num=parseInt(prompt("Enter your num"));
if  (num%2==0){
    total+=num;
}else{
    total-=num;
}

}
    while (num!=0)
    console.log(total);
    
*/
var sum=0;
var num=parseInt(prompt("Enter your number"));
for (i=1; i<=num; i++){
    sum+=1/i;  
}
  console.log(sum); 