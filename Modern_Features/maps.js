var fruits = new Map();
fruits.set(1,"Apple");
fruits.set(2,"Banana");
fruits.set(3,"Orange");
fruits.set(4,"Cherry");
fruits.set(5,"Tomato");
fruits.set(6,"Curd");

console.log(fruits);

for(var key of fruits.keys()){
    console.log(`The key value is ${key}`);
    console.log(`The value for key ${key} is ${fruits.get(key)}`);

}

 for(var value of fruits.values()){
    console.log(`The value is ${value}`);
 }

 for(var [key,value] of fruits){
    console.log(`The key value is ${key} and the value is ${value}`);
 }


fruits.forEach((key) => {console.log(`The key value is ${key}`);});