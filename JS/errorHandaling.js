//try{
//    console.log("Hello")
//    console.log(SayHello());
//    console.log("This is an error");
//}
//
//catch(e){
//    console.log("Description "+e.description)
//    console.log("Message "+e.message)
//    console.log("Stack trace:"+e.stack)
//}
//
//
//finally{
//    console.log("This line is guaranteed to execute")
//}
/////////////////////////////////////////
//function drive(){
//    var num1=parseInt(prompt("Enter num1"));
//    var num2=parseInt(prompt("Enter num2"));
//    try{
//        if(num2==0){
//          throw{
//              error:"Divide by zero error",
//              message:"Number can not be zero"
//              
//          }
//        }else{
//            console.log(`Result=${num1/num2}`)
//        }
//    }
//    catch(e){
//        console.log(e.error);
//        console.log(e.message);
//    } 
//    
//}
//
//drive();

//function f(){
//    
//    try{
//        console.log(0);//0
//        console.log(name2);
//    }catch(e){
//        console.log(1);//1
//        return true;//true
//        console.log(2);
//    }finally{
//        console.log(3);//3
//        return false;//true will become false
//        console.log(4)
//    }
//    console.log(5)
//}
//console.log(f());//result 0,1,3,false
//
//
////closure
//function mul(x){
//    return function x(b){
//        return function a(d){
//            return x*b*d
//        }
//    }
//}
//mul(2)(3)(4)
//
//x(3);
//a(4)


/*

Question-5

Any year is input by the user. Write a program to determine whether the year is a leap year or not.
Leap Years are any year that can be evenly divided by 4.  A year that is evenly divisible by 100 is a leap year only if it is also evenly divisible by 400.

Example : 
1992      Leap Year
2000      Leap Year
1900      NOT a Leap Year

*/


function Numbers(n1,n2){
    
    for(var i=0;i<n1.length;i++){
        if(n1.charAt(i)==n2.charAt(i-1)){
            console.log('true')
        }else{
            console.log('false')
        }
    }
}

Numbers(2,2);















