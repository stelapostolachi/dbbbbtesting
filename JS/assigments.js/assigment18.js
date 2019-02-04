/*Question 1=============================================
Create a function that accepts 1 string, e.g. "Bob", return a greeting of the form "Hello Bob!".
helloName("Bob") → "Hello Bob!"
helloName("Alice") → "Hello Alice!"
helloName("X") → "Hello X!"

function hello (string){
   var output = "Hello".concat(" ").concat(string).concat("!");
   console.log(output);
}
hello("Bob");
hello("Alice");
hello("X");


Question 2=============================================
Create a function that accepts two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"

function makeAbba(str1,str2){
    
    console.log(str1.concat(str2).concat(str2).concat(str1))
    
}

makeAbba("Hi", "Bye"); 
makeAbba("Yo", "Alice"); 
makeAbba("What", "Up");


Question 3=============================================
Create a function return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"


function extraEnd(string){
    var last2chars = string.substr(-2,2)
    console.log(last2chars.concat(last2chars).concat(last2chars))
}

extraEnd("Hello");
extraEnd("ab");
extraEnd("Hi");

Question 4=============================================
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"

function firstTwo(string){
    if(string.length<2){
        console.log(string)
    }else{
        console.log(string.substr(0,2))
    }
}
firstTwo("Hello");
firstTwo("abcdefg");
firstTwo("ab");

Question 5==============================================
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"

function firstHalf(string){
    var output = string.substr(0,(string.length/2))
    console.log(output)
    
}

firstHalf("WooHoo");
firstHalf("HelloThere");
firstHalf("abcdef");

Question 6===============================================
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"

function withoutEnd(string){
    var output=string.substr(1,string.length-2)
    console.log(output)
}
withoutEnd("Hello"); 
withoutEnd("java");
withoutEnd("coding");

Question 7===============================================
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"


function comboString(a,b){
    if (a.lengh>b.lengh){
        console.log(a+b+a)
    }else {
        console.log(b+a+b)
    }
    
}
comboString("Hello", "hi");
comboString("hi", "Hello");
comboString("aaa", "b");

Question 8================================================
Given 2 strings, return their concatenation, except omit the first char of each.
nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"

function nonStart(string1,string2){
    var output=string1.substr(1)+string2.substr(1);
    console.log(output);
    
}
nonStart("Hello", "There");
nonStart("java", "code");
nonStart("shotl", "java");


Question 9================================================
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.
left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"

function left2(string){
    if(string.length<2){
      
      console.log(string);
    }else{
        var firstNumber=string.substr(0,2)
        console.log(string.substr(2)+firstNumber);
    }
    
}

left2("Hello");
left2("java");
left2("Hi");

Question 10===============================================
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"

function right2(string){
   if (string.length<=2) {
       console.log(string)
   }else{
       var lastNumber=string.substr(string.length-2);
    
       console.log(lastNumber+string.substr(0,string.length-2));
   }
    
}
right2("Hello");
right2("java");
right2("Hi");
*/


