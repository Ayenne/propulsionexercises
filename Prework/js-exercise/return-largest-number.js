function largest_of_four(arr){
    let largestArr = [];
    let largest = 0;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
        largestArr.push(largest);
        largest = 0;
    }
    return largestArr;
}
console.log(largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));