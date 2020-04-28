function add_all(arr) {
    let result = 0;
    for (let i = arr[0]; i <= arr[1]; i++){
        result = result + i;
    }
    return result;
}
console.log(add_all([-1,1]));