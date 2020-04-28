function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++){
        let index = i;
        let tymczas = 0;
        let min = arr[i];



        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < min){
                min = arr[j];
                index = j;
            }
        }

        tymczas = arr[i];
        arr[i] = min;
        arr[index] = tymczas;
    }
    return arr;
    

}


arr = [8, 0, 235, 6, 1, 125362, 3, 537, 2]
console.log(selectionSort(arr))