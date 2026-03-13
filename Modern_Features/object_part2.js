var employee = {
name : "",
age : "",
salary : "",

getEmployeeInfo: function(){
    console.log(`Employee Name is ${this.name}`)
    console.log(`Employee Age is ${this.age}`)
    console.log(`Employee Salary is ${this.salary}`)
},

}

var emp1 = Object.create(employee);
var emp2 =Object.create(employee);

emp1.name = "Sameera";
emp1.age = 28;
emp1.salary = 150000;

emp2.name = "Naveen";
emp2.age = 27;
emp2.salary = 120000;   

emp1.getEmployeeInfo();
console.log(" ");
emp2.getEmployeeInfo();