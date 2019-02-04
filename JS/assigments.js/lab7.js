/*//Write a function that accepts a string and a non-negativ number and prints a larger string that is number.
////1.
function stringTime(string,number){
    var str="";
    for (var i=0; i<number; i++){
        str=str.concat(string);
    }
    console.log(str);
}

stringTime("Hi",2);
stringTime("Hi",4);

//2

 function love6(num1,num2){
     
     if (num1+num2==6 || num1==6 || num2==6){
         console.log("true");
     }else if (num1-num2==6 || num2-num1==6) {
         console.log("true");
     }else {
         console.log("false");
     }
 }

love6(6,4);
love6(4,2);
love6(5,7);

////3.
function specialEleven(number){
    if(number%11==0 || number%11==1){
        console.log("true");
    }else{
        console.log("false");
    }
       
}

specialEleven(22);
specialEleven(23);
specialEleven(24);

///4.

function deerPlay(temp,isSummer){
    if(isSummer){
        if(temp>60 && temp<100){
            console.log("true");
        }else{
            console.log("false");
        }
    }else{
        if(temp>60 && temp<90){
            console.log("true");
        }else{
            console.log("false");
        }
        
    }
}

deerPlay(70, false);
deerPlay(95, false);
deerPlay(95, true);




///5
function arrayCount9(array){
    var counter=0;
    for (var i=0; i<array.length; i++){
        if (array[i]==9){
            counter++;
        }
    }
    console.log(counter);
}

arrayCount9([1,2,9]);
arrayCount9([9,9,9]);



//6
 function cigarParty(number,boolean){
     if(boolean==false){
        if (number>40 && number<60){
            console.log("true");
        }else {
            console.log("false");
        }  
     
     }else if (boolean==true){
         console.log("true");
     }
 }

cigarParty(30,false);
cigarParty(50,false);
cigarParty(70,true);


Question 7


function doubleX(array){
for (var i=0; i<array.length; i++){
    if (array[i]=="x" && array[i+1]=="x"){
        console.log("true");
        break;
    }else if (array[i]=="x") {
        console.log("false");
        break;
    }else if(i==array.length-1){
        console.log("Not found");
    }
}
}
doubleX(["a","x","x","b","b"]); 
doubleX(["a","x","a","x","a","x"]);
doubleX(["x","x","x","x","x"]);
doubleX(["a","x","a","x","x"]);

Question8
function caughtSpeeding(speed,result){
    if (result==false){
    if (speed<=60){
           console.log(0);
        }else if (speed>61 && speed<=80){
            console.log(1);
        }else if(speed>=81){
            console.log(2);
            }
        }else if(result==true){
            if (speed<=65){
                console.log(0);
            }else if (speed>66 && speed<=85){
                console.log(1);
            }else{
                console.log(2);
            }
        }  
    }

caughtSpeeding(60,false);
caughtSpeeding(65,false);
caughtSpeeding(65,true);

Question 9.
You and your date are trying to get a table at a restaurant. The parameter "yourStyle" is the stylishness of your clothes, in the range 0..10, and "dateStyle" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe). 
Write a function that accepts yourStyle and dateStyle and prints the result
dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1


function dateFashion(yourStyle,dateStyle){
    if(yourStyle>=8 || dateStyle>=8){
        console.log(2);   
    }else if (yourStyle<=2 || dateStyle<=2){
        console.log(0);     
    }else {
        console.log(1);
    }
    
}

dateFashion(5, 10); 
dateFashion(5, 1); 
dateFashion(5, 5);

Question-10
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, write a funtion that accepts the indexOfDay and isVacation and prints a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
alarmClock(1, false); ->"7:00"
alarmClock(5, false); ->"7:00"
alarmClock(0, false); ->"10:00"
alarmClock(2,true); ->"10:00"
alarmClock(7,true); ->off
*/
function alarmClock(indexOfDay,isVacation){
    if (isVacation==false){
        if(indexOfDay==1 || indexOfDay==2 || indexOfDay==3 || indexOfDay==4 || indexOfDay==5) {
            console.log("7:00");
            
        }else if (indexOfDay==6 || indexOfDay==0){
            console.log("10:00");
            
        }
    }else if (isVacation==true){
       if(indexOfDay==1 || indexOfDay==2 || indexOfDay==3 || indexOfDay==4 || indexOfDay==5) {
           console.log("10:00");
           
       }else {
           console.log("off");
       }
    }
}


alarmClock(1, false); 
alarmClock(5, false);
alarmClock(0, false); 
alarmClock(2,true); 
alarmClock(7,true); 
















