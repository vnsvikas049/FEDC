const fruits = ["Apple", "Banana", "Cherry"];  
fruits.pop();  
fruits[2] = "Orange";  
console.log(fruits); 


// if friuts.pop apply to the friuts array the last element present at index 2 is missing 
// when I put fruits[3] = "orange" thand the updates friuts array is apple,banana,empty,orange 
