function is_power_of_two(num){
    if(num === 1){
        return false;
    }
    while(num > 1){
        if (num % 2 === 0){
            num = num / 2;
        }else{
            return false;
        }
    }
    return true;
}
console.log(is_power_of_two(1));