/*1) Display how many sentences in the string.

2) Display how many words in the string.

3) Display todays date.

4) Pick today's weather from the string and convert to Celsius and display the result.

5) Separate Numbers and non numerical characters to 2 separate variables and display the result.

         Please use isNaN() = is not a number method to check if it is a number or not.
         console.log(isNaN(1));  -- >false 
         console.log(isNaN("apple")); -- >true

        Output Should Be:
            InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
           1230811201870

6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.

7) Display first sentence in Uppercase and other sentences in Lowercase.

8) Remove all spaces from the string and display the result.

9) Reverse all words order in the string and replace all "." and "," with ""

      Output Should Be:
      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In
      */
var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."

var sentance=strVar.split(".")
console.log(sentance);

var words =strVar.split(" ")
console.log(words);

var d = new Date("08/11/2018");
console.log(d);

var weatherC=(70-32)*5/9
console.log(weatherC.toFixed())

var numbers="";
var characters=""
for(var i=0;i<strVar.length;i++){
    if(isNaN(strVar.charAt(i))==true){
        characters=characters+strVar.charAt(i)
    }else if(strVar.charAt(i)!==" "){
        numbers=numbers+strVar.charAt(i)
    }
}

console.log(characters);
console.log(numbers);

var string=strVar.replace('2 to 3 hours' ,'3 to 4 hours')
console.log(string);

var string1=strVar.split(".")
console.log(string1[0].toUpperCase()+"."+string1[1].toLowerCase()+string1[2].toLowerCase())

var output=''
for(var i=0; i<strVar.length;i++){
    if(strVar.charAt(i)!==" "){
        output=output+strVar.charAt(i)
    }
}console.log(output)

////Q1
//var sentences=strVar.split(".");
//console.log(sentences);
//
////Q2
//var words =strVar.split(" ");
//console.log(words);
//
////Q3
//var todayDate=strVar.substr(114,10);
//console.log(todayDate);
//
////Q4
//var weather=((strVar.substr(137,3)-32)*5/9).toFixed();
//console.log(weather);
//
////Q5
//var numerical="";
//var nanNumerical="";
//for (var i=0;i<strVar.length;i++){
//    if(isNaN(strVar.charAt(i))==true){
//        nanNumerical = nanNumerical + strVar.charAt(i);
//    }else if(isNaN(strVar.charAt(i))==false) {
//        if(strVar.charAt(i)!=" "){
//            numerical=numerical+strVar.charAt(i);
//        }
//    }
//}
//console.log(nanNumerical);
//console.log(numerical);
////Q6.
//var replaceN=strVar.replace('2 to 3 hours','3 to 4 hours')
//console.log(replaceN)
//
////Q7
//var spl=strVar.split(".")
//console.log(spl[0].toUpperCase()+spl[1].toLowerCase()+"."+spl[2].toLowerCase()+".");
//
////Q8
//var removeSpaces=" ";
//for (var i=0;i<strVar.length;i++){
//    if (strVar.charAt(i)!=" "){
//     removeSpaces = removeSpaces+strVar.charAt(i)
//    }
//}
//console.log(removeSpaces)
//
//
////Q9
//var reverse=strVar.split(" ");
//var myReverse=[];
//for(var i=reverse.length-1;i>=0;i--){
//    myReverse=myReverse+reverse[i]+" ";
//}
//var ouptput="";
//for(var i=0; i<myReverse.length; i++){
//    if(myReverse.charAt(i)=="," || myReverse.charAt(i)=="."){
//     (myReverse.charAt(i)==" ");
//            ouptput=ouptput+""; 
//    }else {
//        ouptput=ouptput+myReverse.charAt(i);
//    }
//}
//console.log(ouptput);
//
