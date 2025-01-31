const sentenceBuilder = {
    subject: "", // Initialize as empty
    verb: "", // Initialize as empty
    object: "", // Initialize as empty
  
    // Method to build the sentence
    buildSentence: function () {
      // Check if any property is missing
      if (!this.subject || !this.verb || !this.object) {
        return "Incomplete sentence";
      }
      // Build and return the full sentence
      return this.subject + " " + this.verb + " " + this.object;
    },
  
    // Method to update properties dynamically
    updateProperty: function (property, value) {
      // Check if the property exists in the object
      if (this.hasOwnProperty(property)) {
        this[property] = value; // Update the property
        return `Updated ${property} to "${value}"`;
      } else {
        return "Invalid property"; // Property doesn't exist
      }
    },
  };
  
  // Example Usage:
  
  // Initial buildSentence call (all properties are empty)
  console.log(sentenceBuilder.buildSentence()); // Output: "Incomplete sentence"
  
  // Update properties dynamically
  console.log(sentenceBuilder.updateProperty("subject", "The Cat")); // Output: "Updated subject to 'The cat'"
  
  console.log(sentenceBuilder.updateProperty("verb", "is running")); // Output: "Updated verb to 'is running'"
  console.log(sentenceBuilder.updateProperty("object", "on the roof")); // Output: "Updated object to 'on the roof'"
  
  // Build the complete sentence
  console.log(sentenceBuilder.buildSentence()); // Output: "The cat is running on the roof"
  
  // Attempt to update an invalid property
  console.log(sentenceBuilder.updateProperty("adjective", "quickly")); // Output: "Invalid property"
  