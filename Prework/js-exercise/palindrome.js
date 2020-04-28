function palindrome(string){
    let newString = string.split("").reverse().join("");
    if (newString === string){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome("AbbA"));