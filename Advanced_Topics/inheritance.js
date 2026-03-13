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
doFollow(){
    return "You are Following";
}

}

class anotherEmployee extends Employee{
    constructor(name,email){
        super(name,email);  
    }

    getAnotherEmployeeInfo(){
        return `This is another employee `;
    }
    }


/*var sam = new Employee("Sameera","sameera@gmail.com");
console.log(sam.getEmployeeInfo());
sam.setjobDescription("Developing Softwares");
console.log(sam.jobDescription);
console.log(sam.getjobDescription());*/

var anotherSam = new anotherEmployee("Another Sameera", "another_sameera@gmail.com");
console.log(anotherSam.getAnotherEmployeeInfo());
console.log(anotherSam.getEmployeeInfo());
module.exports = Employee;