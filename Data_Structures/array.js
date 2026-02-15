//way 01
var students = ["sameera","koshi","jayaru","sachinthaka"];
console.log(students);

//way 02
var employees = new Array("samee","koshi","jayaru","sachinthaka");
console.log(employees);

console.log(students[1]);

students[1] = "Naveen";
console.log(students);

console.log(employees.length);

var candidates = ["sameera","physical",90,"3rd",true];
console.log(candidates);
candidates.pop();
console.log(candidates);

candidates.unshift(3);
console.log(candidates);

candidates.shift();
console.log(candidates);

console.log("");
console.log("");

//Array Fill and Fitters

var numbers = [1,7,9,24,55,26,17,78,49,44];

function checkAge(age){
 return age <= 18;
}
console.log(numbers.filter(checkAge));

console.log(numbers.fill("hello",2,6));






