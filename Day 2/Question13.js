// Number of rows for the pattern
const numRows = 5;

// Generate the pattern using a for loop
let pattern = "";
for (let i = 1; i <= numRows; i++) {
    pattern += "*".repeat(i) + "\n";
}

// Print the pattern
console.log(pattern);