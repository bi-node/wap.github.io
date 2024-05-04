
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            total += arr[i];
        }
    }
    return total;
}

let myArray = [23,42,34,34,43,23,2,-4];
console.log(sum(myArray));
