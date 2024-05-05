function printNumbers(from, to) {
    for (let i = from; i <= to; i++) {
        printWithDelay(i, i - from); // Adjust delay for each number
    }
}

function printWithDelay(x, delay) {
    setTimeout(function() {
        console.log(x);
    }, delay * 1000); // Convert delay to milliseconds
}

printNumbers(0, 5);