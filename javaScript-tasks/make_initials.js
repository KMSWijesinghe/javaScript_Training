function initials(fullName){
    return fullName
    .trim() // Remove Start and end spaces
    .split(/\s+/) // split by using space as separator, and ignore multiple spaces and make an array of names
    .map(name => name[0].toUpperCase()) // take the first character of each name and convert it to uppercase
    .join('.')+'.'; // join the initials with a dot and add a dot at the end.
}

console.log(initials("Kulasekara Mudiyanselage sameera wijesinghe"));