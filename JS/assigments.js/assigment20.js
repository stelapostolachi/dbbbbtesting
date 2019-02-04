/*Question-1
For Mark and John:
1. For each of them, create an object with properties for their full name,mass,and height 
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Do not forget they might have the same BMI 
Remember: BMI = mass/(height*height);

var Mark={
    fullName:"Mark Jefferson",
    mass:130,
    height:6,
    calculate: function(){
        return Mark.mass/(Mark.height*Mark.height); 

    }
};

var John={
    fullName:"John David",
    mass:130,
    height:6,
    calculate: function(){
        return John.mass/(John.height*John.height); 
    
    }
};


if(Mark.calculate()>John.calculate()){
    console.log(Mark.fullName+" has greater BMI wich is  "+ Mark.calculate());
}else if (John.calculate()>Mark.calculate()){
    console.log(John.fullName+" has greater BMI eich is "+ John.calculate());
}else{
    console.log(Mark.fullName +" and "+John.fullName +" BMI is equal.");
}






Question-2

1. Build a function constructor called Salary to calculate the average salary of Cybertek Student. Salary constructor should include:

    - First Name of the student

    - Last Name of the student

    - Gender of the student

    - Age of the student

    - Studying Hours of the student 

2. Ask student to enter how many hours he/she studied for 5 weeks and store these hours in the array. (Weekly hours should be 0-10 hours max)

3. Create a method in your constructor to calculate your average studying hours for 5 weeks.

4. Create another method to calculate the salary.

        - if average hours is less than 4 hours, you need to tell student: "Not eligible to go to market, and study more"

        - if average hours is between 4 and 6(included) , salary for that person will be 10 percent more than base salary

        - if average hours is between 6 and 8(included) , salary for that person will be 20 percent more than base salary

        - if average hours is between 8 and 10(included) , salary for that person will be 50 percent more than base salary      

        base salary will be a parameter of the salaryCalculate method. parameter o

5- Print the student salary with his name:  "Mike Smith Salary is $150000"
*/


function Salary(firstName,lastName,studentGen,studentAge,studyHours){
    this.firstName=firstName;
    this.lastName=lastName;
    this.studentGen=studentGen;
    this.studentAge=studentAge;
    this.studyHours=[
        parseInt(prompt("Enter how many hours you studied for 1 week between 0-10")),
        parseInt(prompt("Enter how many hours you studied for 2 week between 0-10")),
        parseInt(prompt("Enter how many hours you studied for 3 week between 0-10")),
        parseInt(prompt("Enter how many hours you studied for 4 week between 0-10")),
        parseInt(prompt("Enter how many hours you studied for 5 week between 0-10"))]
    this.calculateAverage=function(){
      return (this.studyHours[0]+this.studyHours[1]+this.studyHours[2]+this.studyHours[3]+this.studyHours[4])/5;

    };  
    
    this.calculateSalary=function(baseSalary){
        var firstSalary;
        if(this.calculateAverage()<4){
            console.log("Not eligible to go to market, and study more");
        }else{
            if(this.calculateAverage()>=4 && this.calculateAverage()<=6){
           firstSalary=(baseSalary*0.1)+baseSalary;
        }else if (this.calculateAverage()>6 && this.calculateAverage()<=8){
            firstSalary=(baseSalary*0.2)+baseSalary;
        }else if(this.calculateAverage()>8 && this.calculateAverage()<=10){
            firstSalary=(baseSalary*0.5)+baseSalary;
        }
        console.log(this.firstName+" "+this.lastName +" salary is: $"+firstSalary);
    
        }
    }    
}

var student=new Salary("Stela","Postolachi","female",24)
var studentsalary=student.calculateSalary(100000);