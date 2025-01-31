const getUserInfo = (user) => {
    // Destructure and use optional chaining to safely extract properties
    const {
      id,
      profile: {
        name = "Information not available",
        address: {
          city = "Information not available",
          zipcode = "Information not available",
        } = {},
      } = {},
    } = user ?? {};
  
    // Construct the output string
    return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`;
  };
  
  // Example Input 1: Complete data
  const user1 = {
    id: 123,
    profile: {
      name: "John Doe",
      address: { city: "Los Angeles", zipcode: "90001" },
    },
  };
  console.log(getUserInfo(user1));
  // Output: "User John Doe (ID: 123) lives in Los Angeles (ZIP: 90001)"
  
  // Example Input 2: Missing fields
  const user2 = {
    id: 123,
    profile: { name: "John Doe" },
  };
  console.log(getUserInfo(user2));
  // Output: "User John Doe (ID: 123) lives in Information not available (ZIP: Information not available)"
  
  // Example Input 3: Partially missing data
  const user3 = {
    id: 123,
    profile: {
      address: { city: "New York" },
    },
  };
  console.log(getUserInfo(user3));
  // Output: "User Information not available (ID: 123) lives in New York (ZIP: Information not available)"
  
  // Example Input 4: Completely missing data
  const user4 = null;
  console.log(getUserInfo(user4));
  // Output: "User Information not available (ID: undefined) lives in Information not available (ZIP: Information not available)"
  