function isAnagram(test, original){
    test = test.toLowerCase();
    original = original.toLowerCase();

    test = test.split('').sort().join('');
    original = original.split('').sort().join('');

    if(test === original){
        return true;
    }else{
        return false;
    } 
}
console.log(isAnagram("apple", "pale"));