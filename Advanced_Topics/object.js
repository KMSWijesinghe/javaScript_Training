const Employee = require("./class.js");

var emp1 =new Employee("Ali","ali@gmail.com");
console.log(emp1.getEmployeeInfo());
emp1.setjobDescription("Developing Softwares");
console.log(emp1.getjobDescription());