const greetUser = function () {
      let name = prompt("Please enter your name:");
      if (!name) {
        name = "Guest"; // Default to "Guest" if input is empty or user cancels
      }
      alert(`Hello, ${name}!`);
    };
    
    // Call the function to see it in action
    greetUser();