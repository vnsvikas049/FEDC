function sumNumbers(...numbers) {
    // Use the rest parameter to calculate the sum of the numbers
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  function getNumbersFromUser() {
    const numbers = [];
    let input;
  
    while (true) {
      // Prompt the user to enter a number or type "done" to finish
      input = prompt("Enter a number (or type 'done' to finish):");
  
      if (input.toLowerCase() === "done") {
        break;
      }
  
      const parsedNumber = parseFloat(input);
  
      // Validate the input
      if (!isNaN(parsedNumber)) {
        numbers.push(parsedNumber);
      } else {
        alert("Please enter a valid number.");
      }
    }
  
    // Use the sumNumbers function to calculate the total
    const total = sumNumbers(...numbers);
    return total;
  }
  
  // Example usage:
  const result = getNumbersFromUser();
  alert(`The total sum is: ${result}`);
  