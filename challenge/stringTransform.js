function transformString(inputString) {
    let length = inputString.length;
    let result = inputString;
    
    // Check if the length is divisible by both 3 and 5 
    if (length % 15 === 0) {
        // we first reverse the entire string
        result = inputString.split('').reverse().join('');
        // Then replace each character with its ASCII code
        result = result.split('').map(char => char.charCodeAt(0)).join('');
    } 
    // divisible by 3
    else if (length % 3 === 0) {
        result = inputString.split('').reverse().join('');
    } 
    //  divisible by 5
    else if (length % 5 === 0) {
        result = inputString.split('').map(char => char.charCodeAt(0)).join('');
    }
    
    return result;
}
// example
let exampleString1 = "HelloWorld!";
let transformedString1 = transformString(exampleString1);
console.log(transformedString1);


