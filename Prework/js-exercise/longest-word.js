function longest_word(sentence){
    let sentenceSplit = sentence.split(' ');
    let longestWordCount = 0;
    let longestWord;
    for(let i = 0; i < sentenceSplit.length; i++){
        if (sentenceSplit[i].length > longestWordCount){
            longestWord = sentenceSplit[i];
            longestWordCount = sentenceSplit[i].length;
        }
    }
    return longestWord;
}
console.log(longest_word("This is an amazing test"));