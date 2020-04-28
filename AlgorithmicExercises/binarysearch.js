//FIND THE INDEX OF X

function binarySearch (arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let m = Math.floor(arr.length / 2);
   
    while(r - l >= 1) {
        if (arr[m] > x) {
            r = m;
            m = Math.floor(((r - l) / 2) + l);
            
        } else if (arr[m] < x) {
            l = m;
            m = Math.floor(((r - l) / 2) + 1 + l);
        } else if (arr[m] === x) {
            return m;
        } 
    }
    return -1;
}


arr = [1, 3, 6 , 7, 10, 14, 18, 29, 55, 123];
x = 55; //=> result: 8

console.log(binarySearch(arr, x));
