function checkVow(words){
 const vowels = "aeiou";
 let count = 0;
 for (let char of words.toLowerCase()) // Convert the input string to lowercase to ensure case-insensitive comparison
    {
    if(vowels.includes(char)){
        count++;
    }
}
return count;
 
}


function vowCount(str){
    return typeof str === 'string' ? (str.match(/[aeiou]/gi) || []).length : 0;
}



console.log(checkVow("sameera wijesinghe is the most powerful person in the world"));

console.log(vowCount("Koshi are you lying to me"));