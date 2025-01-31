let people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

let formattedpeople = people.map(({name,address:{city,street:{name:streetname,number}}})=>
                                  
    `${name} lives in ${city} on ${streetname}`                              
);
console.log(formattedpeople)
