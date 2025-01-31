function calculatePrice() {
    let price, discount;
  
    // Loop until a valid price is entered
    while (true) {
      price = prompt("Enter the price:");
      if (price !== null && !isNaN(price) && parseFloat(price) > 0) {
        price = parseFloat(price);
        break;
      } else {
        alert("Please enter a valid positive number for the price.");
      }
    }
  
    // Loop until a valid discount is entered or allow default
    while (true) {
      discount = prompt("Enter the discount percentage (leave blank for 10%):");
      if (discount === null || discount === "") {
        discount = 10; // Apply default discount
        break;
      } else if (!isNaN(discount) && parseFloat(discount) >= 0) {
        discount = parseFloat(discount);
        break;
      } else {
        alert("Please enter a valid non-negative number for the discount.");
      }
    }
  
    // Calculate the final price after applying the discount
    const finalPrice = price - (price * discount) / 100;
  
    return finalPrice.toFixed(2); // Return the final price rounded to 2 decimal places
  }
  
  
  const result = calculatePrice();
  alert(`The final price after discount is: $${result}`);
  