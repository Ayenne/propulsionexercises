function factorial(n){
    let result = 1;
    
    if(n < 0){
        return 'n must be > or = to 0';
    }

    for(let i = 1; i <= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(5));