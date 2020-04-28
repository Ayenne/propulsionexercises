function mergeSort (arr) {
    if (arr.length <= 1) { 
        return arr;
    }

    const m = Math.floor(arr.length / 2);
    const l = arr.slice(0, m);
    const r = arr.slice(m);

    return merge(
        mergeSort (l), mergeSort (r)
    );
}

function merge (l, r) {
    let sortedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while ( leftPointer < l.length && rightPointer < r.length){
        if (l[leftPointer] < r[rightPointer]){
            sortedArr.push(l[leftPointer]);
            leftPointer++;
        } else if (r[rightPointer] < l[leftPointer]) {
            sortedArr.push(r[rightPointer]);
            rightPointer++;
        }
    }
    
    return sortedArr.concat(l.slice(leftPointer)).concat(r.slice(rightPointer));
}

arr = [22, 11, 15, 2, 4, 3, 23, 94];
console.log (mergeSort (arr));