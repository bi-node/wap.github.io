/*in a Node.js environment, this code will always result in an error because Node.js does
 not have a global object like window in browsers. 
Therefore, this.message will be undefined, resulting in an error.*/

//In browser output is : Hello world because in web page function belong to global(window) so, this.message will
//result in the error less output.



var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();