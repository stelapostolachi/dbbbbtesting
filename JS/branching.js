/*var i=0;
while(i<6){
    if(i==3){
        break;
    }
    i++;
    console.log(i);
}


for (var i=1; i<=10; i++){
    if(i%2==0){
        continue;
    }
    console.log(i+" ");
}

Write a progrma that calculate number introduced by user and count them and will stopt when is introduced a negativ number.
var number;
var sum=0;

while(true){
      number=parseInt(prompt("Enter number"))
      if (number<0){
          break;
      }
      sum=sum+number;
      }
    console.log(sum)




 
var number, sum=0;
for( var i=1; i<=5; i++){
number=parseInt(prompt("Enter a number"));
    if(number<=0){
        continue;
    }
    sum=sum+number;
}
    console.log(sum);


var start=1;
var sum=0
do{
    if(start%2==0){
        continue;
    }
    sum=sum+start;
}while(++start<=10);
console.log(sum);

start,sum will be 25

var i=0;
outer:
do{
    i=8;
    inner:
    while(true){
        console.log(i--);
        if(i==4){
            break outer;
        }
    }
}while(true);

output 8 7 6 5


loop1:
for(var i=0; i<3; i++){
    loop2:
    for(var j=0; j<3; j++){
        if(i==1 && j==1){
        continue loop1;
        }
        console.log("i="+i+"j="+j)
}
}
output: 
i=0j=0
 i=0j=1
i=0j=2
 i=1j=0
 i=2j=0
 i=2j=1
i=2j=2


  


