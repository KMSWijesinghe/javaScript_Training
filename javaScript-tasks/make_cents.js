function dollar(number){
    return '$' + (number/100).toFixed(2);
}
console.log(dollar(1000));
