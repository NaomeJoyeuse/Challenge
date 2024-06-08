# Challenge
responsive photo gallery, ArrayMap

the first challenge Gallery
-used html and css 
-simple design of html and for a good design i used css displayed images in Grid and for responsiveness i used media query
2nd challenge 
<br>
**ArrayMap **
**How it Works**
<br>
Initialization: I Create a Map to track cumulative sums.<br>
<br>
Iteration: Loop through the array, updating the cumulative sum.<br>
Check Conditions: If the sum equals the target or sum - target exists in the map, return true.<br>
Update Map: Add the current sum to the map.<br>
Completion: If no subarray is found, return false.<br>
<br>
**How to Run**<br>
<br>
Copy the ArrayMap function into your JavaScript file.<br>
Define your array and target value.<br>
Call ArrayMap(arr, target) and log the result.<br>
<br>
3RD challenge String Transformation
<br>
**How It Works**
<br>
Initialization:
-The function transformString takes an inputString as its parameter.<br>
-The length of the inputString is stored in the length variable.<br>
-A result variable is initialized with the inputString.<br>
<br>
Divisibility Check:
If the length of the string is divisible by both 3 and 5 , the function first reverses the string using split('').reverse().join(''), then replaces each character with its ASCII
If the length is divisible by 3 but not 15, the function simply reverses the string using split('').reverse().join('').
If the length is divisible by 5 but not 15, the function replaces each character with its ASCII 
Return Result: The transformed string, stored in the result variable, is returned.
