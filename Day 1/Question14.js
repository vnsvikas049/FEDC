let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
  
  // Filter students with marks greater than 50
  let passedStudents = students.filter(student => student.marks > 50);
  
  // Display their name and subject
  passedStudents.forEach(student => {
    console.log(`${student.name} - ${student.subject}`);
  });