//How to create Object/how to acces an object.
//var plan2Name="Basic";
//var plan2Price=3.99;
//var plan2Space=100;
//var plan2Data=1000;
//var plan2Pages=10;
//
//var plan1Name="Professional";
//var plan1Price=5.99;
//var plan1Space=500;
//var plan1Data=4000;
//var plan1Pages=50;
//
//
//var plan3Name="Ultimate";
//var plan3Price=9.99;
//var plan3Space=2000;
//var plan3Data=20000;
//var plan3Pages=500;
//
//console.log("The cost of the  "+plan2Name+" package is $ "+plan2Price+" per month. ");
//
//
//
//var Plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10
//};
//console.log("The cost of the  "+Plan1.name+" package is $ "+Plan1.price+" per month. ");
//
//var Plan2={
//    name:"Professional",
//    price:5.99,
//    space:500,
//    data:4000,
//    pages:50
//};
//console.log("The cost of the  "+Plan2.name+" package is $ "+Plan2.price+" per month. ");
//
//var Plan3={
//    name:"Ultimate",
//    price:9.99,
//    space:2000,
//    data:20000,
//    pages:500
//};
//
//
//console.log("The cost of the  "+Plan3.name+" package is $ "+Plan3.price+" per month. ");
/*
var car = {
    make:"Fiat",
    model:500,
    year:1957,
    color:"Medium Blue",
    passagers:2,
    convertible:false,
    mileage:8800
};
if (car.mileage<5000 && car.make=="Fiat"){
    console.log("Buy it");
}else {
    console.log("do not buy it")
}
               
               
              // How to add a property?
    
if the curent month is July ,August or December, the costumer gets 20% discount on the plan
*/

//Plan1.discountMonths=[7,8,12];
//Plan1.price=4.99;
//delete Plan1.data;
//console.log(Plan1)
//
//console.log("name" in Plan1)//in returns true or false //condition.How to check if a property name exist in object.
//Check if John's salary is less than or wqual to100.if it is //increase it to 120.Also,check if adam salary is included.If //not,add his new salary too.
//var salaries = {
//    John:100,
//    Ann:160,
//    Pete:130
//};
//if(salaries.John<=100){
//    salaries.John=120;
//    
//}
//if ("Addam" in salaries==false) {
//    salaries.Adam=150;
//}
//console.log(salaries);
//display My Honda Engine Size is 2.2 and hp is 500.
//var MyHonda ={
//    color:"red",
//    wheels:4,
//    engine:{
//        cylinders:4,
//        size:2.2
//    },
//    hp:[300,500,100]
//};
//console.log("My Honda Engine Size is "+MyHonda.engine.size+" and hp is "+MyHonda.hp[1]+".")


//var Plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10,
//    discountMonths:[7,8,12],
//    calcuAnual:function (percentDisc){
//    var bestprice=Plan1.price;
//    for (var i=0;i<Plan1.discountMonths.length;i++){
//        if(Plan1.discountMonths[i]==7 || Plan1.discountMonths[i]==8){
//           bestprice=Plan1.price*percentDisc; 
//        }
//     }
//    return bestprice*12;
//  }
//};
////if user signe up in certain months,he gets discount for the entire year,if user signe up for the basic plan in July,or August he gets 20 percent off
//
//
//var annualPrice=Plan1.calcuAnual(0.85);
//console.log(annualPrice)
//var car={
//    make:"Honda",
//    model:"Civic",
//    year:2000,
//    color:"Red",
//    milage:75000,
//    started: false,
//    start: function(){
//        this.started=true;
//    },
//    stop:function(){
//        this.started=false;
//    },
//    drive:function(){
//        if(this.started){
//            console.log("it is runing");
//        }else{
//            console.log("you need to start the engine first.")
//        }
//    }
//};
//
//
//car.drive();
//car.start();
//car.drive();
//car.stop();

//var song={
//    name:"Walk this way",
//    artist:"Run-D.M.C",
//    minutes:4,
//    seconds:3,
//    genre:"80s",
//    playing:false,
//    play:function(){
//        if(!this.playing){
//            this.playing=true;
//            console.log("Playing "+this.name+" by "+this.artist);
//        }
//    },
//    pause:function(){
//        if(this.playing){
//            this.playing=false;
//            
//        }
//    }
//};
//
//song.play();
//song.pause();

//var object ={
//    name:"Stela",
//    lastName:"Postolachi",
//    yearOfBirth:1994,
//    job:"automation tester",
//    isMarried:true,
//    family: ["Anna","Tony","Michael"],
//    calculateAge: function(){
//        var `age =2018-object.yearOfB`irth
//            return age;
//    }
//};
//var myAge=object.calculateAge();
//console.log(myAge);
//                 //for in statement
//
//for(variable in object){
//    
//}
//
//var car = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1955,
//   color: "black",
//   mileage: 281341
//};
//for(x in car){
//   console.log(x+":"+ car[x]);
//}

//write a program to display in the console 123 var object{a:1,
//    b:2 c:3}
//var object1={
//    a:1,
//    b:2,
//    c:3
//};
//var str=" ";
//for (var x in object1){
//    str=str+object1[x]//display 123 in rows
//    
//}
//console.log(str);

//how you can build your object.
//var car = {};
//car.make="Honda";
//car.model="civic";
//car.mileage=20000;
//car.drive=function(){
//    console.log("Driving");
//}
//console.log(car)
//for(var pr in car){
//    console.log(car[pr]);
//}
//             How to create the same object methods.
//var car = {};
//var car = new Object();
////              Temple for creating objects
//function Hotel(name,rooms,booked){
//    this.name = name;
//    this.rooms = rooms;
//    this.booked = booked;
//    this.checkAvailability = function (){
//        return this.rooms-this.booked;//400-300 calculation
//    };
//}

//     Creating Many Objects
//var quayHotel = new Hotel("Quay",40,25);
//var parkHotel = new Hotel("Park",120,77);


//function Guests(name,lastName,age){
//    this.name = name;
//    this.lastName = lastName;
//    this.age =age;
//}
//
//var hotelGuest1 = new Guests("John","Mike",20);
//var hotelGuest2 = new Guests("Mike","John",20);
//var hotelGuest3 = new Guests("Kevin","Eric",20);
//var hotelGuest4 = new Guests("Eric","Kevin",20);
//
//console.log(hotelGuest1.name+" is "+hotelGuest1.age+" Years old.");//Joh is 20
//console.log(hotelGuest2.name);//Mike
//console.log(hotelGuest3.name);//Kevin
//console.log(hotelGuest4.name);//Eric

//create a function .Construction shuold have a method that calculates and returns the area of the rectangle.
//create a different rectangle objects and find the area of them
//function Rectangle(width,height){
//    this.width = width;
//    this.height = height;
//    this.area = function () {
//        return this.width * this.height// method to call your function
// };
//}
//var rectangleArea1= new Rectangle(1,30);
//var rectangleArea2= new Rectangle(121,3);
//var rectangleArea3= new Rectangle(2,33);
//console.log(rectangleArea1.area());
//console.log(rectangleArea2.area());
//console.log(rectangleArea3.area());

//
//function Plans(name,monthly,diskSpace,dataTransfer,sitePages,discountMo){
//    this.name = name;
//    this.monthly = monthly;
//    this.diskSpace = diskSpace;
//    this.dataTransfer = dataTransfer;
//    this.sitePages = sitePages;
//    this.discountMo = discountMo;
//    
//this.calcAnual =function(percentDiscount){
//    var bestprice=this.monthly;   
//    for (var i=0;i<this.discountMo.length;i++){
//        if(this.discountMo[i]==7 || this.discountMo[i]==8 || this.discountMo[i]==12){
//           bestprice=this.monthly*percentDiscount; 
//            break;
//        }
//     }
//    return bestprice*12;
//  };
//}
//
//var p1 = new Plans("Basic", 3.99,100,1000,10,[7,8])
//var p2= new Plans("Professional", 5.99,500,5000,50,[7,8,12])
//var p3 = new Plans("Ultimate", 9.99,2000,20000,500,[7,8])
//
//var annualPrice1=p1.calcAnual(0.8);
//console.log(annualPrice1);
//
//var annualPrice2=p2.calcAnual(0.8);
//console.log(annualPrice2);
//
//var annualPrice3=p3.calcAnual(0.8);
//console.log(annualPrice3);
//              

//                  isNaN()
//var a= "apple";
//console.log(isNaN(a));//true
//
//var b= "23";
//console.log(isNaN(b));//false
//
//var c="abc23";
//console.log(isNaN(c));//true
//
//var d=" ";//js understand as 0.
//console.log(isNaN(d));//false
//
//var e=23;
//console.log(isNaN(e));//false
//          
//
////             toFixed() method for decimales
//var a=213.73145;
//console.log(a.toFixed());//214
//
//var b=213.73145;
//console.log(b.toFixed(3));//213.731
//
//var c=213.73645;
//console.log(b.toFixed(2));//213.73
//
//var d=2.13e+15;
//console.log(d.toFixed(2));//2130000000000000.00
//
//
//
//////         toPrecision()method
//var a=13.3714;
//console.log(a.toPrecision());
//var a=13.3714;
//console.log(a.toPrecision(2));
//var a=13.3714;
//console.log(a.toPrecision(3));
//var a=13.3714;
//console.log(a.toPrecision(10));
//
//var a=0.001658853;
//console.log(a.toPrecision());
//var a=0.001658853;
//console.log(a.toPrecision(2));
//var a=0.001658853;
//console.log(a.toPrecision(3));
//var a=0.001658853;
//console.log(a.toPrecision(10));


//       toExponential() Method
//var c=123456;
//console.log(c.toExponential());
//
//
//var c=123.45;
//console.log(c.toExponential());

//           toString() method

//var num = 15;
//var str = num.toString();
//console.log(typeof(num));//number
//console.log(typeof(str));//string

//var s1 ="dfgsdA08awq #23423wefa^$#saaag5345sfs";
//var numerical=0;
//var nonnumerical=0;
//
//for (var i=0;i<s1.length;i++){
//    if(isNaN(s1.charAt(i))){
//      nonnumerical=nonnumerical+1;
//    }else{
//        numerical=numerical+1;
//      
//    }
//}
//console.log(nonnumerical);
//console.log(numerical);
//
////           math object
///               Math.round

//var a = Math.round(2.60);
//console.log(a);//3
//
//var b = Math.round(2.50);
//console.log(b);//3
//
//var c= Math.round(2.49);
//console.log(c);//2
//
//
//var e = Math.round(-2.50);
//console.log(e);//-2
//
//var f = Math.round(-2.49);
//console.log(f);//-2
//
//var d= Math.round(-2.60);
//console.log(d);//-3
//
//
//      //Math.sqrt() returns root of positive number
//var a= Math.sqrt(0);
//console.log(a);//0
//
//var b = Math.sqrt(1);
//console.log(b);//1
//
//var c = Math.sqrt(64);
//console.log(c);//8
//
//var d = Math.sqrt(-9);
//console.log(d);//NaN
//
//var f = Math.sqrt(9);
//console.log(f);//3

//      Math.floor() rounds number down to the nearest integer

//var a = Math.floor(0.60);
//console.log(a);//0
//
//var b = Math.floor(0.40);
//console.log(b);//0
//
//var c = Math.floor(5);
//console.log(c);//5
//
//var d = Math.floor(-5.1);
//console.log(d);//-6
//
//var e = Math.floor(-5.9);
//console.log(e);//-6
//
//var f = Math.floor(5.1);
//console.log(f);//5
//
//             //Math.ceil() rounds number up to the nearest integer
//
//var a = Math.ceil(0.60);
//console.log(a);//1
//
//var b = Math.ceil(0.40);
//console.log(b);//1
//
//var c = Math.ceil(5);
//console.log(c);//5
//
//var d = Math.ceil(5.1);
//console.log(d);//6
//
//var e = Math.ceil(-5.1);
//console.log(e);//-5
//
//var f = Math.ceil(-5.9);
//console.log(f);//-5
//
//      //Math.random()
////return a random number between 0 and 1.
//var a=Math.random();//0 is included 
//console.log(a);
////returns a random number between 1 and 10.
//var b=Math.random()*10+1;
//console.log(b)
////return a random number between 1 and 100.
//var c=Math.random()*100+1;
//console.log(c)


//create a random number between 0 and 200 and check if this number is greater than 100.
//var c=Math.round(Math.random()*200);
//if (c>100){
//    console.log(c+"random number")
//}else{
//    console.log(c+"not random number")
//}















