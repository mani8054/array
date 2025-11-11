const input = require("readline-sync");
let data = [];

for (let i = 0; i < 5; i++) {
  let name = input.question("Enter student name " + (i + 1) + ": ");
  data.push(name);
}

for (let i = 0; i < data.length; i++) {
  console.log("Roll No " + (i + 1) + ": " + data[i]);
}

console.log("Total students: " + data.length);
