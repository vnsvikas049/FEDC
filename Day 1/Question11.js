let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  };
  
  for( key in book){
    console.log(key,":",book[key])
  }