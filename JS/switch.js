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
                   
}*/

/*var laptopModels;
laptopModels= prompt("Enter your laptop model");
switch(laptopModels){
    case"Apple":
        console.log("Apple no virus");
        break;
    case"Dell":
        console.log("Tough one");
        break;
    case"Acer":
        console.log("Cheap one");
        break;
    default:
        console.log("Do not buy that one");
        break;
}*/
//if you switch number and goo to consol will show the weekday
/*var weekDays = 4;
switch(weekDays){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Day is invalid");
        break;
}
*/

//Assignment-4/switch statements
/*Question1
Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
Numbers divisible by 2 are even and numbers not divisible by 2 are odd.
var num;
num= parseInt(prompt("Enter number"));
switch(num%2){
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
    case "R": case "r":
        console.log("Red")
        break;
    case "O": case "o":
        console.log("Orange")
        break;
    case "G" case "g":
        console.log("Green")
        break;
    default:
        console.log("No mor option");
        
}
*/














