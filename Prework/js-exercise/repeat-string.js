function repeat_string_num_times(str, num){
    let newStr = '';
    if (num < 0){
        return '';
    }
    for (let i = 0; i < num; i++){
         newStr = newStr + str;
    }
    return newStr;
}
console.log(repeat_string_num_times('abc', -3));