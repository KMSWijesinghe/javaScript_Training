function dollar(number){
    return '$' + (number/100).toFixed(2); // Divide the number by 100 to convert cents to dollars, and use toFixed(2) to format it to 2 decimal places.
}
console.log(dollar(1000));
