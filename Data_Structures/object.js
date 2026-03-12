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

console.log(user.lastName);
console.log(user["skill"]);

console.table(user);



console.log(user.getUserInfo("Super Admin"));