////Es5
//var Person5 = function(name,yearOfBirth,job){
//    this.name=name;
//    this.yearOfBirth=yearOfBirth;
//    this.job=job;
//    
//}
//
//var p1= new Person5();
//
//Person5.prototype.calculateAge=function(){
//    var age=new Date().getFullYear()-this.yearOfBirth;
//    console.log(age);
//}
//var mike5 = new Person5("mike",1980,"tester");
//mike5.calculateAge();//returning your method calculation
//
////Es6
// class Person6{
//     constructor(name,yearOfBirth,job){
//         this.name=name;
//         this.yearOfBirth=yearOfBirth;
//         this.job=job;
// }
//     calculateAge(){
//         var age=new Date().getFullYear()-this.yearOfBirth;
//         console.log(age);
//     }
//
// }
//
//let mike6=new Person6("mike",1980,"tester");
//mike6.calculateAge(); //returning your method calculation


//Static Methods
//Static Methods that are simply attached to the classes.

//class Person6{
//     constructor(name,yearOfBirth,job){
//         this.name=name;
//         this.yearOfBirth=yearOfBirth;
//         this.job=job;
// }
//     calculateAge(){
//         var age=new Date().getFullYear()-this.yearOfBirth;
//         console.log(age);
//     }
//    static greeting(){
//        console.log("Hello");
//    }
//
// }
//
//let mike6=new Person6("mike",1980,"tester");
//mike6.calculateAge(); //returning your method calculation
//Person6.greeting();


//When to use static method?
//1-If you are writhing utility classes and they are not supposed to be changed. 
//2-If there is some code that can easily by all the instance methods, extract that code in to static code.
//3-If you are sure that definition of the method will nether be change or overridden.A static method can not be overridden.

//function Bicycle5(cadence,speed,tirePressure){
//    this.cadence=cadence;
//    this.speed=speed;
//    this.tirePressure=tirePressure;
//    this.inflatire=function(){
//        this.tirePressure+=3;
//    }
//}
//var b15= new Bicycle5(50,20,4,25)
//console.log(b15)


//class Bicycle6{
//    constructor(cadence,speed,year,tirePressure){
//        this.cadence=cadence;
//        this.speed=speed;
//        this.year=year;
//        this.tirePressure=tirePressure;
//    }
//  inflatire(){
//        return this.tirePressure+=3;
//  }
//}
//
//let b16 = new Bicycle6(50,20,4,25);
//
//console.log(b16.inflatire());

               //Inheritance with classes
//Inheriting constructor


//class Animal{
//    constructor(name){
//        this.name=name;
//    }
//}
//
//
//class Dog extends Animal{
//    constructor(name){
//    super(name);
//    }
//}
//let d1 = new Dog("abs");
//console.log(d1.name);


//class Person{
//    constructor(name,age,weight){
//        this.name=name;
//        this.age=age;
//        this.weight=weight;
//    }
//    displayName(){
//        console.log(this.name);
//    }
//    displayAge(){
//        console.log(this.age);
//    }
//    displayWeight(){
//        console.log(this.weight);
//    }
//}
//
//
//class Programmer extends Person{
//    constructor(name,age,weight,language){
//        super(name,age,weight);
//        this.language=language;
//    }
//    displayLang(){
//        console.log(this.language)
//    }
//}
//
//let mike=new Person("mike",25,120);
//mike.displayName();
//mike.displayAge();
//mike.displayWeight();
//
//
//let John=new Programmer("John",30,150,"JS")
//
//John.displayName();
//John.displayAge();
//John.displayWeight();
//John.displayLang();

//class Vehicle{
//    start(){
//        console.log("starting the vehicle");
//    }
//}
//
//class Car extends Vehicle{
//    start(){
//        super.start();
//        console.log("starting the car");
//        
//    }
//}
//
//let honda = new Car();
//honda.start();
               //Getter and setter
//class GetThings{
//    constructor(size){
//        this.length=size;
//    }
//    get Length(){
//        return this.length;
//    }
//    set Length(value){
//        this.length=value;
//        console.log("The values has been set.")
//    }
//}
//
//let thing = new GetThings(9);
//console.log(thing.Length)//getter
//
//this.Length=10;//setter diference because you assign somthing to this.Length.
//console.log(this.Length)

class EncapTest{
    constructor(name,idNum,age){
        this._name=name;
        this._idNum=idNum;
        this._age=age;
    }
    get Age(){
        return this.age;
    }
    get Name(){
        return this.name;
        
    }
    get IdNum(){
        return this.idNum;
    }
    set Age(newAge){
        this.age=newAge;
    }
    set Name(newName){
        this.name=newName
    }
    set IdNum(newIdNum){
        this.idNum=newIdNum
    }
}
let encap = new EncapTest();
encap.Name = "Mike";
encap.Age=20;
encap.IdNum="Ms30";
console.log(`Name: ${encap.Name} Age: ${encap.Age} Id: ${encap.IdNum}`)



let encap2 = new EncapTest("Mike",20,"Ms30")
console.log(`Name: ${encap2.Name} Age: ${encap2.Age} Id: ${encap2.IdNum}`)