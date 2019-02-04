        //Creating array in diferent ways
/*var scores=new Array();
var scores= Array(10);//size of array because doesn't have new.
var scores=new Array(9,10,5,8);//values array because have new.
var scores=["red","green",1,false];
var scores=[];

var names=["Stela","Mike","Ana","John"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[0]+","+names[1]);//Array in one line


var myArray= Array(11);
myArray[0]="J";
myArray[1]="F";
myArray[2]="M";
myArray[3]="AP";
myArray[4]="M";
myArray[5]="JUN";
myArray[6]="J";
myArray[7]="A";
myArray[8]="S";
myArray[9]="O";
myArray[10]="N";
myArray[11]="D";

var index;
index=prompt("Enter your month index");
console.log("The month is"+myArray[index]);

var myArray=Array(6);
myArray[0]="M";
myArray[1]="T";
myArray[2]="W";
myArray[3]="T";
myArray[4]="Fr";
myArray[5]="Sat";
myArray[6]="Sun";
 var weekDay;
weekDay=prompt("Enter your number");
              console.log("Today's day is"+myArray[weekDay]);



//task display each array element in the console by using for //loop.
var shoppingList=["cheese","pumpkin","bread","eggs","milk","almonds","cherry"];
for (var i=0; i<shoppingList.length; i++){//how many index numers
    console.log(shoppingList[i]);
    
}

//
 var carList=["Audi","Bentley","Honda","Bufori","Infiniti","Lexus"];

for (var i=0; i<carList.length; i++);
    if (carList[i] == "Honda"){
        console.log("I found your car " +carList[i]+ " in this array");
        break;
    }else if (i==carList.length-1){
    
        console.log("I could not find your car "+ carList[i] +" in this list");
    }


var carList=["Audi","Bentley","Honda","Bufori","Infiniti","Lexus"];

console.log(Array.isArray(carList));//output True
console.log(carList.toString());




var shoppinglist=["cheese", "pumpkin", "bread", "eggs", "milk", "almonds","melon"];

if (Array.isArray(shoppinglist)){
console.log(shoppinglist.toString());}
else{
   console.log("It is not Array");
}


var stack=[];
stack.push(1);
stack.push(2);
stack.push(3);//push new element to array
stack.pop();//removed the las element fromom array 

console.log(stack);//1,2,3
for (var i=1; i<stack.length; i++){
    console.log(stack[i])// 2,3
}

var stack=[];
while(true){
var selection=parseInt(prompt("Please select one of them:\n 1-add a new element to the array\n 2-Remove an element from an array \n 3-Print each element from array \n4-Exit the program"));

if (selection==1){
    var input=prompt("Enter your element");
    stack.push(input);
}else if(selection ==2){
    stack.pop();
} else if(selection==3){
    for (var i=0; i<stack.lenght; i++){
        console.log(stack[i]);
    }
} else if (selection==4){
    console.log("Buy");
    break;
}
}


//Shift method
var myFish = ["angel","clown","mandarin","surgean"];
myFish.shift();//remove first value from array

for (var i=0; i<myFish.length; i++){ //will display all //array one after one.
    console.log(myFish[i]);
}

//loop that every interation will remove the next element //from the array,until it is empty:

var names=["Andrew","Edward","Paul","Chris","John"];
var i; 
while(i=names.shift() !==undefined ){
    console.log(i)
}
console.log(names);


var  myFish= ["anger","crown","mandarin","sturgeon"];
myFish.splice(2,0,"drum")//2 index number ,0 I don't //delete anithing
console.log(myFish)
myFish.splice(3,1);//3 index number
console.log(myFish);
myFish.splice(2,1,"trumpet",)
console.log(myFish)
myFish.splice(0,2,"parrot","anemone","blue")
console.log(myFish);
myFish.splice(2,2);
console.log(myFish);
myFish.splice(1,1);//1index number,1 delete.
console.log(myFish)
           //slice()

var animals=["dog","cat","monkey","donkey","dino","elephant"];

console.log(animals.slice(0));
console.log(animals.slice(1));
console.log(animals.slice(5));
console.log(animals.slice(4,7)); 
console.log(animals.slice(0,1));
console.log(animals.slice(0,2));
console.log(animals.slice(6));
console.log(animals.slice(2,3));
console.log(animals.slice(2,5));

 //indexOf
/*var scores=[10,20,30,10,40,20];
console.log(scores.indexOf(10,2));//3
console.log(scores.indexOf(30,3));//-1
console.log(scores.indexOf(20,-1));//5(fromindex=6+(-5)=5)
console.log(scores.indexOf(20,-5));//1(fromindex=6+(-5)=1)


//task what will be the expected outputs?
var beasts=["ant","bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));//1
console.log(beasts.indexOf("bison",2));//4
console.log(beasts.indexOf("giraffe"));//-1
console.log(beasts.indexOf("camel",-3));//2

//task:What will be the outputs?

var numbers=[2,5,9,2];//looking for index from last array
console.log(numbers.lastIndexOf(2));//3
console.log(numbers.lastIndexOf(7));//-1
console.log(numbers.lastIndexOf(2,3));//3
console.log(numbers.lastIndexOf(2,2));//0
console.log(numbers.lastIndexOf(2,-2));//0
console.log(numbers.lastIndexOf(2,-1));//3

//Sort method
var months= ["March","Jan","Feb","Dec"];
months.sort();
console.log(months);//"[Decem,Feb,Jan,March];

var array1=[1,30,4,21];
array1.sort();
console.log(array1);//[1,21,30,4]

var animals=["Cat","ant","Bee","elephant","Ant"];
animals.sort();
console.log(animals);//["Ant","Bee","Cat", "ant", "elephant"]

var mixArray=["cat","Ant",3,"elephant","Bee",67];
mixArray.sort();
console.log(mixArray);//[3,67,"Ant","Bee","cat","elephant"]
*/
//task
/*var numArray=Array(15);

numArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

console.log(numArray[10]);
numArray[9]=35;
numArray[9]=numArray[5]+numArray[12];
console.log(numArray);

//task
var weekDays=["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"];
for (var i=0; i<weekDays.length; i++){
    console.log(weekDays[i]);
}

var numbers=Array(9);
//task
for (var i=0; i<numbers.length; i++){
   numbers[i]=parseInt(prompt("Enter your numbers 10 times"))
    
}
var sum=0
for (var i=0; i<numbers.length;i++){
    sum = sum+numbers[i];
}

console.log(sum);

//Task/shows index numbers if you switch the characters. 

var indices=[];
var array=["a","b","a","c","a","d"];
var element="a";

for (var i=0; i<array.length; i++ ){
   if (array[i]==element){
    indices.push(i)
   }
}
 console.log(indices);

var activities=[["work",9],["eat",2],["commute",2],["play",2],["sleep",7]];
for (i=0;i<activities.length; i++){
    var innerArrayLengh= activities[i].length;
    for (var j=0; j<innerArrayLengh; j++){
        console.log("["+i+","+j+"]="+activities[i][j])
    }
}


var arrayLength=3;
var multiArray = Array(arrayLength);

multiArray[0]=Array(arrayLength);
multiArray[1]=Array(arrayLength);
multiArray[2]=Array(arrayLength);
for (var i=0; i<arrayLength; i++ ){
  multiArray[i]=Array(arrayLength);
}
//first//how to assign to do multidimension array.
multiArray[0][0]="apple";
multiArray[0][1]="banana";
multiArray[0][2]="cherry";
//second
multiArray[1][0]=2;
multiArray[1][1]=3;
multiArray[1][2]=4;
//third
multiArray[2][0]=["test",2];
multiArray[2][1]=["today",3];
multiArray[2][1]=["tuesday",5];
//console.log(multiArray)
//console.log(multiArray[2])
//console.log(multiArray[2],[2],[1])

var multiArray=[ 
    ["apple","banana","cherry"],
    [2,3,4],
    [ ["test",2] , ["today",3] , ["tuesday",5] ]
                ];
for (var i=0; i<arrayLength; i++ ){
    var innerArraylength=multiArray[i].length
for (var j=0; j<innerArraylength; j++){
    console.log( multiArray[i][j]);
}
}


/*

//1.
var myArray = ["Orange","Apple"];
var add = prompt("Currently you have: "+myArray+" what you want to add? "); 
    myArray.push(add);
    alert("New list: " +myArray);

//2.
var myArray = ["Orange","Apple"];
var element=prompt("Currently you have: "+myArray+"\nWhat do you want to remove?");
var removed=false;


for(var i=0;i<myArray.length;i++){
   if(myArray[i]==element){
       myArray.splice(i,1);
       removed=true;
   }    
}

if(removed){
   alert(element+ " successfully removed");
   alert("New list"+myArray);
}else{
   alert(element+ " could not be found");
}


//3
var myArray = ["Orange","Apple"];
var element=prompt("Currently you have: "+myArray+"\nWhat do you want to remove?");
var edited=false;
var newElement=prompt("What is the new product ?");

for(var i=0;i<myArray.length;i++){
   if(myArray[i]==element){
       myArray.splice(i,1,newElement);
       edited=true;
   }    
}

if(edited){
   alert(element+ " successfully changed");
   alert("New list "+myArray);
}else{
   alert(element+ " could not be found ");
}

//4.
var myArray = ["Orange","Apple"];
for (var i=0;i<myArray.length; i++){
    alert((i+1)+"-"+myArray[i]);
}



 var storeNum = new Array(1000);
 for (var i=1; i<storeNum.length; i++){
     for (var j=0; j<10; j++){
         storeNum.push(i)
         break;
     }
     console.log(storeNum[i])
 }
   


var weekArray=[12];
weekArray[0]="Monday";
weekArray[1]="Tuesday";
weekArray[2]="Thursday";

var index=parseInt(prompt("enter number"));
console.log (weekArray[index])


var shoppingList=["rosii","castraveti","poama"];
for (i=0;i<shoppingList.length;i++){
    console.log(shoppingList[i])
}
*/














