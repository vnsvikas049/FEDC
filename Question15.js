// Step 1: Create an array of student objects
let students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Bob", age: 22, marks: { math: 78, science: 82, english: 85 } },
    { name: "Charlie", age: 19, marks: { math: 92, science: 88, english: 91 } }
];

// Step 2: Add a new student to the array
students = [...students, { name: "Diana", age: 21, marks: { math: 89, science: 94, english: 90 } }];

// Step 3: Calculate and display the average marks for each student
let averages = students.map(student => {
    const { math, science, english } = student.marks;
    const average = (math + science + english) / 3;
    console.log(`${student.name}'s average marks: ${average.toFixed(2)}`);
    return { name: student.name, average };
});

// Step 4: Find and print the student with the highest average marks
let topStudent = averages.reduce((top, student) => student.average > top.average ? student : top);

console.log(`\nTop student is ${topStudent.name} with an average of ${topStudent.average.toFixed(2)}.`);
