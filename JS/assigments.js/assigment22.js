/*CAR GAS PRICE CALCULATOR

1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array

2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values

3-Create a constructor called Car which includes properties:
make,model,year,mileage,level,tank

4-Add a method to calculate the average mileage

5-Add a method to calculate the how much gas comsume:
if average mileage is between 0 and 500, car comsumes 10 percent more than full tank
if average mileage is between 500 and 1000, car comsumes 20 percent more than full tank
if average mileage is between 1000 and 5000, car comsumes 30 percent more than full tank
if average mileage is between 5000 and 10000, car comsumes 40 percent more than full tank
otherwise car consumes 50 percent more than full tank


6-Add a method to calculate the cost of the gas:
if car year is 2018, that car needs super level gas
if car year is between 2010 and 2018, that car needs premium level gas
if car year is between 2000 and 2010, that car needs regular gas

cost of the gas = gas price * tank

7-Create couple of car objects and console the cost of the gas
*/
//1
var min=parseInt(prompt("Enter minimum mileage."));
var max=parseInt(prompt("Enter maximum mileage."));
var myArray=[];

for (var i=0;i<4;i++){
 var output=Math.floor(Math.random() * (max - min + 1)) + min;
    myArray.push(output);
}
console.log(myArray)
//
//////2
var GasPrice ={
 regular:parseFloat(prompt("Enter the gas prices for regular.")),
 premium:parseFloat(prompt("Enter the gas prices for premium")),
 supper:parseFloat(prompt("Enter the gas prices for supper."))

}
console.log(GasPrice)
//
////3
function Car(make,model,year,mileage,level,tank){
    this.make=make;
    this.model=model;
    this.year=year;
    this.mileage=mileage;
    this.level=level;
    this.tank=tank;
    this.calculateAverage=function(){
        var sum=0
        for (var i=0;i<this.mileage.length; i++){
            sum=sum+this.mileage[i]
            
        }
        return sum/myArray.length;
    };
    this.calculateGasComsume=function(){
        if(this.calculateAverage()>0 && this.calculateAverage()<500){
           return this.tank+(this.tank*0.1);
        }else if (this.calculateAverage()>500 && this.calculateAverage()<1000){
            return this.tank+(this.tank*0.2);
        }else if(this.calculateAverage()>1000 && this.calculateAverage()<5000){
            return this.tank+(this.tank*0.3);
        }else if(this.calculateAverage()>5000 && this.calculateAverage()>10000){
            return this.tank+(this.tank*0.4);
        }else{
            return this.tank+(this.tank*0.5);
        }
        
    };
    this.calculateCostGas=function(){
        if(this.year==2018){
            return Math.floor(GasPrice.supper*this.calculateGasComsume());
        }else if(this.year>2010 && this.year<2018){
            return Math.floor(GasPrice.premium*this.calculateGasComsume());
        }else if(this.year>2000 && this.year<2010){
            return Math.floor(GasPrice.regular*this.calculateGasComsume());
        }
    }
}

var Toyota= new Car("Toyota","Corolla",2018,myArray,GasPrice,13.2);
console.log(Toyota.make+" "+
    Toyota.model+" "+Toyota.year+" cost of the gas is: "+Toyota.calculateCostGas());
var BMW = new Car ("BMW","3-Series",2002,myArray,GasPrice,16.6);
console.log(BMW.make+" "+
    BMW.model+" "+BMW.year+" cost of the gas is: "+BMW.calculateCostGas());
var Mercedes= new Car("Mercedes","Benz",2013,myArray,GasPrice,30);
console.log(Mercedes.make+" "+
    Mercedes.model+" "+Mercedes.year+" cost of the gas is: "+Mercedes.calculateCostGas());



