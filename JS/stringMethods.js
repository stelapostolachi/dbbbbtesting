/*var string = "Java Script";
console.log(string.length);


var firstName= "Stela" ;
var lastName = "Postolachi";
console.log(firstName.length + lastName.length)

//charAt() Method-fiind character
var firstLastName="Stela Postolachi"
console.log(firstLastName.charAt(5))//nan
console.log(firstLastName.charAt(12))//a
//Display each character in console
var x = "Java Script";
for (var i=0; i<x.length; i++){
    console.log(x.charAt(i))
}
//concat()Method
var s1="Hello";
var s2=" World";
var s3=s1.concat(s2);
console.log(s3)

var a="";
var string1="";
var string2="";
function passwordCreate(string1, string2){
string1=prompt("Enter string 1."); 
string2=prompt("Enter string 2.");
  for (var i=0;i<string1.length;i++){
        a=a.concat(string1.charAt(i));
        if (i==2){
            break;
        }
return a.concat(string2.length);
   }
}
var password = passwordCreate(string1,string2);
console.log(password);
    
    //includes()Method-returning string true or false


var str= "Hello Mike, welcome to Amazon world,";
var n = str.includes("Mike");
console.log(n);

Print the length of the str2 if str2 is existing in str1.If doesn't exist,print"not found.


Print the length of the str2 if str2 is existing

function checkedString(str1,str2){
    if (str1.includes(str2)){
        console.log(str2.length)
        }else{
            console.log("doesn't exist")
        }
    }


checkedString("your order confirmation number is XYZ", "confirmation");
checkedString("your order confirmation number is XYZ", );

       //indexOf()methods
var str = "Hello Mike, welcome to Amazon world.";
var n= str.indexOf("Amazon");
console.log(n);

write a function that accepts 2 strings(str1,str2) and prints the position index of the str2 if str2 is existing in str1. If doesn't exist, print"not found'.

function checkedString(str1,str2){
    if(str1.includes(str2)){
        console.log(str1.indexOf(str2))
    }else {
        console.log("Not found")
    }
}
checkedString("your order confirmation number is XYZ","confirmation" );

checkedString("your order confirmation number is XYZ");
      //replace()-replacing to new strind


var str = "Ebay is a very good website";
var replaced = str.replace("Ebay","Bestbuy");
console.log(replaced)


var s1="Stela";
var s2="Postolachi";
var s3= s1.charAt(0)+s1.charAt(1);//St
var s4= s2.charAt(s2.length-2)+s2.charAt(s2.length-1);//-hi
var replaced=s2.replace(s4,s3);//replaced 
console.log(replaced)
      
              //search()
var str= "I want to be number 1 test automation developer.";
console.log(str.search("automation"));//27
console.log(str.search("1"));//20


var str = "In order to be a good tester automation developer,I need to practice at least 2 to 3 hours a day.";
var x = str.search("automation");
  console.log(x);
if(x >= 0){
    console.log("It's found");
}else{
    console.log("Not found");
}



var str = "In order to be a good tester automation developer,I need to practice at least 2 to 3 hours a day.";
var x = str.slice(29,39);
  console.log(x);
if( x=="automation"){
    console.log("It's found");
}else{
    console.log("Not found");
}


      //split() method
var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";
//var array = str.split(" ");
//console.log(array.length);
//console.log(array[array.length-1])//last element in //array
//1 exemple how many times fout it counting. 
var array = str.split(" ");
var counter=0;
for (var i=0; i<array.length;i++){
    if (array[i]=="Netscape"){
        counter++;
    }
}

console.log(counter);

//1 exemple with found it not found it
var array=str.split(" ");
for (var i=0; i<array.length; i++){
    if (array[i]=="Netscape"){
        console.log("found it")
        break;
    }if (i==array.length-1){
        console.log("not found it")
    }
}
*/           //substr
//var str= "JavaScript"
//console.log(str.substr(0,1))
//console.log(str.substr(1,0))
//console.log(str.substr(-1,1))
//console.log(str.substr(1,-1))
//console.log(str.substr(-3))
//console.log(str.substr(1))
//console.log(str.substr(-3))
//console.log(str.substr(-20,2))
//console.log(str.substr(20,2))
            //substring()
//var str= "JavaScript"
//console.log(str.substring(0,1));//J
//console.log(str.substring(1,0));//J
//console.log(str.substring(0,6));//JavaSc
//console.log(str.substring(4));//Script
//console.log(str.substring(4,7));//Scr
//console.log(str.substring(7,4));//Scr
//console.log(str.substring(0,7));//JavaScr
//console.log(str.substring(0,10));//JavaScript
//
//
//var str= "JavaScript"
//console.log(str.substring(str.length-4,2));//vaSc
//console.log(str.substring(2,3));//v
//console.log(str.substring(str.length,2));//vaScript
//         toLowerCase()

//var str= "JavaScript";
//console.log(str.toLowerCase());
//           //toUpperCase()
//var str= "JavaScript";
//console.log(str.toUpperCase());
//
//expected output JaVaSCript
//var str= "JavaScript";
//var a=""
//for (var i=0; i<str.length;i++){
//    if (i==2 || i==5) {
//       var x=str.charAt(i).toUpperCase();
//        
//    }else{
//        x=str.charAt(i);
//    }
//    a=a+x;
//}console.log(a);

//          trim()-removes whitespaces from both ends of string.

//var str= "     JavaScript";
//console.log(str.trim());
//var str= "     JavaScript      ";
//console.log(str.trim());
//var str= "  Java  Sc ri pt";
//console.log(str.trim());

var str= " 342 "
console.log("|"+str.trim()+"|");











                
















