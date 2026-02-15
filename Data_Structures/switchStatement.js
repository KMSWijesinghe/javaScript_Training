function userRole(name,role){
    switch(role){
        case "Super Admin":
            console.log(`${name} is ${role} and it has all access`);
            break;
        case "Admin":
            console.log(`${name} is ${role} and it has no access to delete`);
            break;
        default:
            console.log(`${name} is ${role} and it has no access`);
    }

}
userRole("John","Admin");

var userRoles = function (name,role){
    switch(role){
        case "Super Admin":
            console.log(`${name} is ${role} and it has all access`);
            break;
        case "Admin":
            console.log(`${name} is ${role} and it has no access to delete`);
            break;
        default:
            console.log(`${name} is ${role} and it has no access`);
    }

}
userRoles("Sameera","Super Admin");


function test() {

return "Hello";

}

console.log(test);

function createFunctionA() {
    return function() {
        console.log("This is a traditional function");
    };
}

const funcA = createFunctionA();
funcA(); // Output: This is a traditional function

function createFunctionB() {
    return () => {
        console.log("This is an arrow function");
    };
}

const funcB = createFunctionB();
funcB(); // Output: This is an arrow function

//function expression
const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Output: Hello, Alice!