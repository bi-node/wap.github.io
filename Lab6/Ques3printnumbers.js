function printNumbers(from, to) {
   for (let i = from; i <= to; i++) {
       printWithDelay(i, i - from); 
   }
}

function printWithDelay(x, delay) {
   setTimeout(function() {
       console.log(x);
   }, delay * 1000); 
}

printNumbers(0, 5);