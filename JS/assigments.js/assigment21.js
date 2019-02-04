///*Question1
//
//Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.
//
//sameStarChar("xy*yzz") → true
//sameStarChar("xy*zzz") → false
//sameStarChar("*xa*az") → true

function sameStarChar(star){
    for (var i=0;i<star.length;i++){
        if (star.charAt(i)=="*" && star.charAt(i+1)==star.charAt(i-1)){
            console.log("true");
            break;
            
        }else if (i==star.length-1){
            console.log("false");
            
        }
    }
}


sameStarChar("xy*yzz");
sameStarChar("xy*zzz");
sameStarChar("*xa*az");

//Question2
//
//We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.
//
//countTriple("abcXXXabc");
//countTriple("xxxabyyyycd");
//countTriple("a");

function countTriple(string){
    var counter=0;
    for (var i=0;i<string.length; i++){
       if(string.charAt(i)==string.charAt(i+1) && string.charAt(i)==string.charAt(i-1)){
           counter++;
       }
    }
     console.log(counter);
}
countTriple("abcXXXabc");
countTriple("xxxabyyyycd");
countTriple("a");

//Question3
//
//We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.
//
//gHappy("xxggxx");true
//gHappy("xxgxx");false
//gHappy("xxggyygxx");false

function gHappy(str){
    for(var i=0;i<str.length;i++){
        if(str.substring(i,i+1)=="g"){
            var boolean=false;
            if(str.substring(i+1,i+2)=="g" || str.substring(i-1,i)=="g"){
                boolean=true;
            }  
        }
    }
    if(boolean){
        console.log("true");
    }else{
        console.log("false");
    } 
}

gHappy("xxggxx");
gHappy("xxgxx");
gHappy("xxggyygxx");

//Question4
//
//Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).
//
//equalIsNot("This is not") → false
//equalIsNot("This is notnot") → true
//equalIsNot("noisxxnotyynotxisi") → true

function equalIsNot(string){
    var is=0;
    var not=0;
for (var i=0;i<string.length;i++){   
    if (string.charAt(i)=="i" && string.charAt(i+1)=="s"){
            is++;   
        }
    if (string.charAt(i)=="n" && string.charAt(i+1)=="o" && string.charAt(i+2)=="t"){
           not++;
    }
        
    }
    if(is==not){
            console.log("true");
            
        }else{
            console.log("false");
        }  
}

equalIsNot("This is not");
equalIsNot("This is notnot");
equalIsNot("noisxxnotyynotxisi");

//Question5
//A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.
//
//getSandwich("breadjambread") → "jam"
//getSandwich("xxbreadjambreadyy") → "jam"
//getSandwich("xxbreadyy") → ""

function getSandwich(str){
   var bread=0
    for(var i=0;i<str.length;i++){
        if (str.indexOf("bread")>-1){
            var index1=str.indexOf("bread")
        }
     
        if(str.lastIndexOf('bread')>-1){
            var index2=str.lastIndexOf('bread');
        }
    }
      if(index1==index2){
          console.log(" ")
      }else{
          console.log(str.substring(index1+5,index2))
          
      }
    
    }
getSandwich("breadjambread") 
getSandwich("xxbreadjambreadyy") 
getSandwich("xxbreadyy")


//Question6
//
//Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.=
//
//endOther("Hiabc", "abc") → true
//endOther("AbC", "HiaBc") → true
//endOther("abc", "abXabc") → true
//*/
function endOther (string1, string2){
    string1=string1.toLowerCase();
    string2=string2.toLowerCase();
        if(string1.includes(string2)==true || string2.includes(string1)==true ){
            if ((string1.indexOf(string2)==string1.length-string2.length) || (string2.indexOf(string1)==string2.length-string1.length)){
                console.log(true);
            }else{
                console.log(false);
            }
        }else{
                console.log(false);
            }
    
}
endOther("abc", "abXab");
endOther("Hiabc", "abc");
endOther("AbC", "HiaBc");
endOther("abc", "abXabc");
endOther("abc", "abXabcd");


//Question7
//
//Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
//
//seeColor("redxx") → "red"
//seeColor("xxred") → ""
//seeColor("blueTimes") → "blue"

function seeColor(string){
    for (var i=0;i<string.length;i++){
        if(string.substr(0,3)=="red"){
            console.log("red")
            break;
        }
        if(string.substr(0,4)=="blue"){
            console.log("blue")
            break;
        }else{
            console.log(" ")
            break;
        }
    }
}

seeColor("redxx");
seeColor("xxred");
seeColor("blueTimes");

