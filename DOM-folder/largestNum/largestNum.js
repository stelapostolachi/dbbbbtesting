function compare(){
    var num1=parseInt(document.getElementById("t1").value);
    var num2=parseInt(document.getElementById("t2").value);
    var num3=parseInt(document.getElementById("t3").value);
    if(num1>num2 && num1>num3){
 document.getElementById("myVar").innerHTML=
     `the largest number is ${num1}`;
    }else if(num2>num1 && num2>num3){
 document.getElementById("myVar").innerHTML=`the largest number is ${num2}`;
    }else if (num3>num1 && num3>num2){
   document.getElementById("myVar").innerHTML=`the largest number is ${num3}`;
    } 
    
}































