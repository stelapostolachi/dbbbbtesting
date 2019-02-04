//You are in the market to buy a car and visited a dealer
//
//1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.
//
//2- create a function that checks if the car state is VA
//
//3- print all the cars where the year is more than 2010 that belongs to va 
//
//4- print total mileage of the cars that belongs to va 
//
// 
//
//Hint: Use callbacks


var dealer =[
    {make:"Honda",model:"Acord",year:1989,mileage:2000,state:"NY"},
    {make:"Audi",model:"RS-7",year:2012,mileage:500000,state:"VA"   },
    {make:"Toyota",model:"Corola",year:2014,mileage:200000,state:"VA"},
            ];

let carState=function(dealer,callback){
    for (let i=0;i<dealer.length;i++){
        if(dealer[i].state.toLocaleLowerCase()=="va"){
            if(typeof callback=="function"){
               callback(dealer[i]);
           }  
        } 
    }
}

carState(dealer,function(myCar){
    if(myCar.state==myCar.state && myCar.year>2010){
        console.log(`${myCar.make} ${myCar.model} is car state ${myCar.state}.`);
    }

})


let determineTotal= function(){
    let totalMileage=0;
    carState(dealer,function(myCar){
            totalMileage=totalMileage+myCar.mileage;
    
    });
     console.log(`Total mileage of the cars that belongs to VA is ${totalMileage}`);
}

determineTotal();


