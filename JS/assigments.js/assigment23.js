//1- Ask employee to enter the hours he/she worked for 4 weeks. and put those hours into an array
let hoursW1;

let myArray=[];

for(var i=0; i<4;i++){
        hoursW1=prompt(`Enter the hours you worked for  weeks. ${(i+1)}`);
myArray.push(parseInt(hoursW1));
}

console.log(myArray);

//2- Ask employee to enter his/her wage and assign it to a variable
let wage=parseInt(prompt("Enter your wage."));
console.log(wage);



//3- Create an employee constructor with properties   ' fName, lName, birthYear'
function Employee(fName, lName, birthYear){
    this.fName=fName;
    this.lName=lName;
    this.birthYear=birthYear;
    this.employeeId=function(){
        return `${this.fName.charAt(0)}${this.lName.charAt(0)}${new Date().getFullYear()-this.birthYear}`
    }
}



//4- Add a method to employee constructor that creates an employee id. 
//
//    Employee id will be first character of first and last name and the age. 
//
//    Example: First Name: Mike
//
//                    Last Name:Smith
//
//                    Age:30
//
//                    Employee ID: MS30
//
//    **For age calculation, use date object.
//
//5- Create a Payroll constructor with properties 'hours and insurance'
function Payroll(hours,insurance){
    this.hours=hours;
    this.insurance=insurance;
    this.calculateHours=function(){
        var total=0;
        for (var i=0;i<myArray.length;i++){
            total=total+this.hours[i];
            
        }
        return total;
    }
    
    this.calculateEarning=function(){
        var total1=0
            total1=this.calculateHours()*wage;
        if (this.insurance==true){
            return (this.calculateHours()*wage + 600);
        }else {
            return total1;
        }
    }
}

    Payroll.prototype.overTime=function(){
       var a =(this.calculateHours()-160)
       var b =(this.calculateEarning()+((wage*1.5)*a));
       return [a,b]
         
    }
var emp1 = new Employee("Ana","David",1994);
var emp2 = new Employee("Vio","Umea",1989)
var pay = new Payroll(myArray,true);
emp1.__proto__.__proto__=Payroll.prototype

console.log(`Employee ID: ${emp1.employeeId()}'s overtime hours for this month is: ${ pay.overTime()[0]} and earning is ${ pay.overTime()[1]}`)

console.log(`Employee ID: ${emp2.employeeId()}'s overtime hours for this month is: ${ pay.overTime()[0]} and earning is ${ pay.overTime()[1]}`)



//Console: Employee ID:ms38's overtime hours for this month is:20 and earning is $4800
//Output should be : Employee ID:___'s overtime hours for this month is:__ and earning is $__

//6- Add a method to Payroll constructor that calculates the total hours that employee worked for 4 weeks. 
//
//    **You have the hours from requirement-1
//
//7- Add a method to Payroll constructor that calculates the earning for 1 month
//
//    ** earning is wage * total hours
//
//    if employee has insurance, add another $600
//
//8- Create a method that will calculate the overtime hours that employee worked for 4 weeks.
//
//    **work hours is weekly 40 hours. Anything more than is overtime.
//
//9- For the overtime hours, increase the wage %50.
//
//    **if employee worked 20 hours overtime, his earning will be  "earning + (wage * 1.5 * 20)"
//
//10-Run the program
//
//     Output should be : Employee ID:___'s overtime hours for this month is:__ and earning is $__
//
//11- Develop your code such a way that calculate overtime hours method (requirement-8) should be shared by both constructor. 
//
//12- Try to use ES6 methods we learned like let, const, spread/rest operators, arrow functions, etc
//
// 
//
//Sample Output:
//
//Week1 hours: 45
//
//Week2 hours: 45
//
//Week3 hours: 45
//
//Week4 hours: 45
//
//var emp1=new Employee("mike","smith",1980);
//let p1=new Payroll(arr,true);
//let wage=20;
//
//Console: Employee ID:ms38's overtime hours for this month is:20 and earning is $4800
//
//this.calculateEarning=function(){
//        var total=0
//        if(insurance==true){
//           total=600;
//        }
//        if(this.calculateHours()<=160){
//            return total=total+(wage*this.calculateHours());
//        }else{
//           return total=total+(160*wage)+this.overTime()
//            return
//        
//        }
//    }
//}Payroll.prototype.overTime=function(){
//        return (this.calculateHours()-160) * (wage * 1.5 )
//    }