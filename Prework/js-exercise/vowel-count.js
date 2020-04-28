function count_vowels(string){
    let vowels = ['a','e','i','o','u'];
    let counter = 0;
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if (string[i] === vowels[j]){
                counter++;
            }
        }
    }
    return counter;
}
console.log(count_vowels("AaaAAA"));