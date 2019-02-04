/*Main Screen has two main products
            1.Vegetables 2.Fruits
 

if user enter 1 (vegetables ) , list 5 vegetables with price
if user enter 2 (fruit) list 5 fruits with price
if user enter different input from 1 and 2,
-alert "Please enter valid option"
Accepts 1-5 for vegetables or fruits selection,
if user enter different input, show "Please enter valid option"
after product selection,  user should enter amount between 1 to 100.
if different than this range show "Please enter amount between 1 to 100"
after amount entrance,  show total price and ask "do you want to shop more ?"
if user enter 1 (yes) start from main product, at the same time keep previous total and add new total it
if no (2) show total price say thank you
first selection only accepts 1 or 2, if not ask again
second selection only accept 1-5 ,if not ask again
amount only accept numbers 1 to 100, if not ask again
continue selection only accept 1 or 2 if not ask again
Vegetables
Cucumber   $2.5
Tomatoes    $3
Onion          $1.5
Pepper        $2
Carrot         $4
Fruits
Orange         $3.5
Banana         $4
WaterMelon  $7
Apple             $8  
Cherry            $4
*/
//var total=0;
// do{   
//
//do {
//    var mainProducts=parseInt(prompt("1.Vegetables\n2.Fruits"));
//if(mainProducts!=1 && mainProducts!=2){
//    alert("Please enter valid option");
//}
//    }while(mainProducts!=1 && mainProducts!=2);
//     
//if(mainProducts==1){
//    do {
//        var vegetables=parseInt(prompt("1-Cucumber $2.5\n2-Tomatoes $3\n3-Onion $1.5\n4-Pepper $2\n5-Carrot $4"));
//if(vegetables!=1 && vegetables!=2 && vegetables!=3 && vegetables!=4 && vegetables!=5){
//        alert("Please enter valid option");  
//}
//    }while(vegetables!=1 && vegetables!=2 && vegetables!=3 && vegetables!=4 && vegetables!=5);
//    
//
//
//if(vegetables==1){
//    do{
//var veg1=parseInt(prompt("Enter amount of Cucumber."));
//if(veg1<1 || veg1>100){
//    alert("Please enter amount between 1 to 100");
//}
//
//    }while(veg1<1 || veg1>100);
//    total=total+(veg1*2.5);
//   alert("Cart total is: "+total);
//
// }
//    
// if(vegetables==2){
//    do{
//var veg2=parseInt(prompt("Enter amount of Tomatoes."));
//if(veg2<1 || veg2>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(veg2<1 || veg2>100);
//     total=total+(veg2*3);
//   alert("Cart total is: "+total);
//} 
//    
//    
//if(vegetables==3){
//    do{
//var veg3=parseInt(prompt("Enter amount of Onion."));
//if(veg3<1 || veg3>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(veg3<1 || veg3>100);
//     total=total+(veg3*1.5);
//   alert("Cart total is: "+total);
//} 
//    
//    
//if(vegetables==4){
//    do{
//var veg4=parseInt(prompt("Enter amount of Pepper."));
//if(veg4<1 || veg4>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(veg4<1 || veg4>100);
//     total=total+(veg4*2);
//   alert("Cart total is: "+total);
//}
//    
// if(vegetables==5){
//    do{
//var veg5=parseInt(prompt("Enter amount of Carrot."));
//if(veg5<1 || veg5>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(veg5<1 || veg5>100);
//     total=total+(veg5*4);
//   alert("Cart total is: "+total);
//}     
//        
//}else if (mainProducts==2){
//    do{
//        var fruits=parseInt(prompt("1-Orange $3.5\n2-Banana $4\n3-WaterMelon $7\n4-Apple $8\n5-Cherry $4"));
//if(fruits!=1 && fruits!=2 && fruits!=3 && fruits!=4 && fruits!=5){
//        alert("Please enter valid option");
//}
//    }while(fruits!=1 && fruits!=2 && fruits!=3 && fruits!=4 && fruits!=5);
//    
//}
//
//
//if(fruits==1){
//    do{
//var fruits1=parseInt(prompt("Enter amount of Orange."));
//if(fruits1<1 || fruits1>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(fruits1<1 || fruits1>100);
//     total=total+(fruits1*3.5);            
//   alert("Cart total is: "+total);
//}  
//    
//    if(fruits==2){
//    do{
//var fruits2=parseInt(prompt("Enter amount of Banana."));
//if(fruits2<1 || fruits2>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(fruits2<1 || fruits2>100);
//     total=total+(fruits2*4);
//   alert("Cart total is: "+total);
//}
//    if(fruits==3){
//    do{
//var fruits3=parseInt(prompt("Enter amount of WaterMelon."));
//if(fruits3<1 || fruits3>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(fruits3<1 || fruits3>100);
//     total=total+(fruits3*7);
//   alert("Cart total is: "+total);
//} 
//    
//    
//   if(fruits==4){
//    do{
//var fruits4=parseInt(prompt("Enter amount of Apple."));
//if(fruits4<1 || fruits4>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(fruits4<1 || fruits4>100);
//     total=total+(fruits4*8);
//   alert("Cart total is: "+total);
//}  
//      
//    if(fruits==5){
//    do{
//var fruits5=parseInt(prompt("Enter amount of Cherry."));
//if(fruits5<1 || fruits5>100){
//    alert("Please enter amount between 1 to 100");
//} 
//    }while(fruits5<1 || fruits5>100);
// total=total+(fruits5*4);
//   alert("Cart total is: "+total);
//    }
//    
//do{
//var buyExtra=parseInt(prompt("Do you want to shop more.\n 1-Yes\n 2-No"));
//if (buyExtra!=1 && buyExtra!=2){
//
////    alert("Please enter valid option");
////}
////}while(buyExtra!=1 && buyExtra!=2);
////
////if (buyExtra==1){
//// continue;
////}else if (buyExtra==2){
////    alert("Thank you for shopping your total is "+ total+"$.");
////} 
////    
////}while(true);
//
//
//var v1,v2,v3,v4,v5,pv1,pv2,pv3,pv4,pv5,f1,f2,f3,f4,f5,pf1,pf2,pf3,pf4,pf5,mainProduct,vegiProduct,amountV,totalV,total,askAgain,totalF,amountF,fruitProduct;
//
////Vegetables
//v1="Cucumber";
//v2="Tomatoes";    
//v3="Onion";          
//v4="Pepper";        
//v5="Carrot";
////price of vegies
//
//pv1=2.5;
//pv2=3;
//pv3=1.5;
//pv4=2;
//pv5=4;
////fruits
//f1="Orange";        
//f2="Banana";        
//f3="WaterMelon";  
//f4="Apple";              
//f5="Cherry";
////price of fruits
//pf1=3.5;
//pf2=4;
//pf3=7;
//pf4=8;
//pf5=4;
//
//total=0;
//
//
//mainLoop:   
//do{
//mainProduct = prompt("What type of product you want to buy ? \n1-Vegetables \n2-Fruits");
//
//if(mainProduct==1){
//    vegiLoop:
//    do{
//    vegiProduct=prompt("1-"+v1+" $"+pv1+"\n2-"+v2+" $"+pv2+"\n3-"+v3+" $"+pv3+"\n4-"+v4+" $"+pv4+"\n5-"+v5+" $"+pv5);
//    if(vegiProduct==1){
//    do{
//        amountV=prompt("Please enter the amount of "+v1);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv1;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//    }while(true);
//
//        
//    }
//    else if(vegiProduct==2){
//        
//    do{
//        amountV=prompt("Please enter the amount of "+v2);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv2;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//    }while(true);
//
//        
//    }
//    else if(vegiProduct==3){
//    do{
//        amountV=prompt("Please enter the amount of "+v3);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv3;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//    }while(true);
//
//    }
//    else if(vegiProduct==4){
//               do{
//        amountV=prompt("Please enter the amount of "+v4);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv4;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else if(vegiProduct==5){
//               do{
//        amountV=prompt("Please enter the amount of "+v5);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv5;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else{
//        alert("please enter valid option");
//    }
//    //vegiLoop
//    }while(true);
//    
//    total+=totalV;
//    alert("you cart total is: "+total);
// 
//    //asking again after showing the total  
//    do{
//    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
//    if(askAgain==1){
//        continue mainLoop;
//    }else if(askAgain==2){
//        break mainLoop;
//    }else{
//        alert("Please enter the valid option")
//    }
//    }while(true);
//    
//    
//    
//}else if(mainProduct==2){
//    fruitLoop:
//    do{
//    fruitProduct=prompt("1-"+f1+" $"+pf1+"\n2-"+f2+" $"+pf2+"\n3-"+f3+" $"+pf3+"\n4-"+f4+" $"+pf4+"\n5-"+f5+" $"+pf5);
//    if(fruitProduct==1){
//       do{
//        amountF=prompt("Please enter the amount of "+f1);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf1;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//        
//    }
//    else if(fruitProduct==2){
//        
//      do{
//        amountF=prompt("Please enter the amount of "+f2);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf2;
//            break fruitLoop;  
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//        
//    }
//    else if(fruitProduct==3){
//       do{
//        amountF=prompt("Please enter the amount of "+f3);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf3;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else if(fruitProduct==4){
//        do{
//        amountF=prompt("Please enter the amount of "+f4);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf4;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//    }
//    else if(fruitProduct==5){
//          do{
//        amountF=prompt("Please enter the amount of "+f5);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf5;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else{
//        alert("please enter valid option");
//    }
//    //fruit loop
//    }while(true);
//    
//    total+=totalF;
//    alert("you cart total is: $"+total);
// 
//    //asking again after showing the total  
//    do{
//    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
//    if(askAgain==1){
//        continue mainLoop;
//    }else if(askAgain==2){
//        break mainLoop;
//    }else{
//        alert("Please enter the valid option")
//    }
//    }while(true);
//    
//}else{
//    alert("please enter valid option");
//    continue;
//}
//
//}while(true);
//
//
//
//alert("Your cart total is:$"+total+"\nThank you for shopping with us");

