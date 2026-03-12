var users = {
    firstName: "Sameera",
    lastName: "Wijesinghe",
    skill: "JavaScript",
    age: 30,
    email: "sameera@example.com",
    };

    for(var user in users){
        console.log(`${user} : ${users[user]}`);
    }

