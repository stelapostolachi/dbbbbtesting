////In Java we created classes and put methods inside and inherited these methods by using extends.
////
////JS (ES5) does not have classes but have PROTOTYPES.
////
////It is not exactly same class, because you do not create instance of it, but you can create methods that affect multiple objects by using prototype.
//
//function Bicycle(cadence ,speed,gear,tirePressure){
//    this.cadence=cadence;
//    this.speed=speed;
//    this.gear=gear;
//    this.tirePressure=tirePressure;
//    
//    this.inflateTires=function(){
//         return this.tirePressure+=3;
//    }
//}
//var b1=new Bicycle(50,20,4,25)
//b1.inflateTires();
//
//
//function Mechanic(name){
//    this.name=name;
//}
//var m1=new Mechanic("Mike");//I want to give Mike acces to InflateTires
//
////When you create a function,JS creates 2 objects.
////1-function name object 
////2-prototype Object
////function foo(){}
////function bar(){}
//function greet(){
//    console.log("Hello");
//}
//console.log(greet())
//console.log(greet.prototype);

//When you create object,__proto__is created by Js engine.

//function foo(){}
//var obj=new foo();
//console.log(obj);
//
////set a property to foo prototype and access it from object
//foo.prototype.test="this is object";//test is a property object
//console.log(obj.__proto__.test);//to acces object we use __proto__
//
//obj.__proto__.hello="test";
//console.log(obj.hello);
//
//obj.test=10;//object is holding test
//console.log(obj.test)

//function Employee(name){
//    this.name=name;
//    
//}
//var emp1=new Employee("Mike");
//var emp2=new Employee("Smith");
//
//Employee.prototype.playPranks=function(){
//    console.log("Prank play");
//}
//
//emp1.playPranks();
//emp2.playPranks();

//In class modules, you have to define all method upfront
//In prototype you put things at run time 
//The minute you add the extra property , every object that was created //from the employee as a constructor , even the ones that were created //before you added that on the property would still work.Because the //prototype look up happens at runtime.

//var simple = {};
//var obj=new Object();
//console.log(simple.__proto__===obj.__proto__);
//console.log(obj.__proto__===Object.prototype);


//function Employee(){}
//var emp=new Employee
////emp.test 
//emp.prop="Employee";
//emp.__proto__.parentProp="Parent of Employer";
//console.log(emp.__proto__.__proto__===Object.prototype)
//
//Object.prototype.grandParentProp="Grand parent";
//function foo(){}
//    var tmp=new foo();
//console.log(tmp.grandParentProp)
//
//console.log(tmp.__proto__.__proto__.__proto__)//null
////Inheritance

//function Employee(name){
//    this.name=name;
//}
//Employee.prototype.getName= function(){
//    return this.name;
//} 
//var emp1=new Employee("Mike");
//console.log(emp1.getName());

//you have employee object and some behaviore , also you have manager object, managers are also employee and comon properties but managers have their own special behavior as well

//function manager(name, departament){
//    this.name=name;
//    this.departament=departament;
//}
//manager.prototype.getDep=function(){
//    return this.departament;
//}
//
//var mgr=new manager("Michel","sales")
//console.log(mgr.getDep());
////console.log(mgr.getName())
//
//
////one way to share is put all common properties in the object prototipe
////second way-manager's prototipe__proto points to employee's prototipe not objects prototipe
//
//mgr.__proto__.__proto__ = Employee.prototype;
//console.log(mgr.getName());





