/*formula
for(var i=0; i<5; i++){
    console.log("outer loop at state:"+ i + "\n");

    for (var p=0; p<2; p++){
        console.log("Inner Loop at state:" + p);
    if(p==1){
        console.log("\n");//extra space
    }
  }
}

//Write a program:
//*,**,***,****,*****

for (var i=1; i<=5; i++){
    for (var p=1; p<=i; p++){
        console.log("*")
    }
    console.log("\n")
}*/


var num=5;
for (var i=1;i<=num;i++){
    var str="";
    for (var p=0;p<i;p++){
        str=str+ " * "
    }
    console.log(str);

}
    

