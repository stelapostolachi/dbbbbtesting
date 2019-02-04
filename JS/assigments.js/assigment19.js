/*Question 1

Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

frontAgain("edited") → true

frontAgain("edit") → false

frontAgain("ed") → true


function frontAgain(string){
    if(string.substr(0,2)==string.substr(-2)){
        console.log("true");
    }else {
        console.log("false");
    }
}


frontAgain("edited");
frontAgain("edit");
frontAgain("ed");

Question 2

Return the number of times that the string "hi" appears anywhere in the given string.

countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2

function countHi(string){
    var counter=0;
    for(var i=0;i<string.length;i++){   
    if (string.charAt(i)=="h"){
        if(string.charAt(i+1)=="i");
        counter++;
    }
    }
    console.log(counter);
}
countHi("abc hi ho");
countHi("ABChi hi");
countHi("hihi");

Question 3

Return true if the string "cat" and "dog" appear the same number of times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true

function catDog(string){
    var counter1=0;
    var counter2=0;
 for (var i=0;i<string.length;i++){
     if (string.includes("cat")==true) {
         counter1++;
     }
     if (string.includes("dog")==true){
         counter2++;
     }
     
 }
     if (counter1==counter2){
         console.log("True");
     }else{
         console.log("False");
     } 
}
catDog("catdog");
catDog("catcat");
catDog("1cat1cadodog");

Question 4

Given a string, return a string where for every char in the original, there are two chars.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree"

function doubleChar(string){
    var output="";
    for (var i=0;i<string.length;i++){
   output =output + string.charAt(i)+string.charAt(i);      
       
    }
    console.log(output);
}

doubleChar("The");
doubleChar("AAbb");
doubleChar("Hi-There");

Question 5

Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false


function endsLy(string){
    if(string.substr(-2)=="ly"){
        console.log("true");
    }else{
        console.log("false");
    }
}

endsLy("oddly");
endsLy("y");
endsLy("oddy");

Question 6

Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""

function withouEnd2(string){
    var output=string.substr(1,string.length-2)
    console.log(output)
}

withouEnd2("Hello"); 
withouEnd2("abc");
withouEnd2("ab");

Question 7

Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. 

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false

function hasBad(string){
   for(var i=0; i<string.length;i++){
       if(string.includes("bad")==true){
           if (string.indexOf("bad")==0 || string.indexOf("bad")==1){
               console.log("True");
            break;
           }
            else{
           console.log("false");
            break;
       } 
   } 
 }
}
hasBad("badxx");
hasBad("xbadxx");
hasBad("xxbadxx");

Question 8

Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

atFirst("hello") → "he"

atFirst("hi") → "hi"

atFirst("h") → "h@"
*/

function atFirst(string){
  if (string.length<2){
      console.log(string+"@")
  }else {
      console.log(string.substr(0,2))
  }
      
  
}
atFirst("hello");
atFirst("hi");
atFirst("h");