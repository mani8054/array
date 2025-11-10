// const input=require("readline-sync");
// data=[1,2,3,4];
// data1=[5,6,7,8];
// merge=data.concat(data1);
// console.log(merge);


///1d array


// m=Array(1,2,3,4,5);
// console.log(m);
 
//2d array
// var ar=[ [1,2],[3,4] ];
// console.log("2d array : ",ar);
// console.log("index values ",ar[0][1]);

//example of 2d array with the help of nexted loop
const input = require("readline-sync");

var ar = [
    [1, 2],
    [3, 4]
];

for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar[i].length; j++) {
        process.stdout.write(ar[i][j] + " "); // print elements in same row
    }
    console.log(); // move to next line after each row
}
