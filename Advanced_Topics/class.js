class Employee{
 constructor(name,email){
    this.name = name;
    this.email =email;

 }

salary = "";
#jobDescription = [];

getEmployeeInfo(){
    return{name : this.name,email : this.email}

}

setjobDescription(description){
    this.#jobDescription.push(description);
}

getjobDescription(){
    return this.#jobDescription;
}



}

var sam = new Employee("Sameera","sameera@gmail.com");
console.log(sam.getEmployeeInfo());
sam.setjobDescription("Developing Softwares");
console.log(sam.jobDescription);
console.log(sam.getjobDescription());

module.exports = Employee;