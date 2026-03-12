var employee = function(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.getEmployeeInfo = function(){
        console.log(`Employee Name is ${this.name}`)
        console.log(`Employee Age is ${this.age}`)
        console.log(`Employee Salary is ${this.salary}`)
    }   
}

var user = {
    firstName: "Sameera",
    lastName: "Wijesinghe",
    skill: "JavaScript",
    age: 30,
    email: "sameera@example.com",

    getUserInfo: function(role) {
        return `This ${this.lastName} is a ${role}`;
    }

};

employee.prototype.getName = function(){
    console.log(`Employee Name is : ${this.name}`)
}

var emp1 = new employee("Sameera",28,150000);
var emp2 = new employee("Naveen",27,120000);
//console.log(emp1);
//emp1.getEmployeeInfo();
//emp2.getEmployeeInfo();

if(emp1.hasOwnProperty("name")){
    emp1.getName();
}
if(emp2.hasOwnProperty("name")){
    emp2.getName();
}