const input=require("readline-sync");
//array using for in loop which give output values is 0,1,2,3 which give index  number npt values
//but in for of loop which give only values not index values
let data=[10,11,12,13,14];
console.log("array element is ");
for(var i in data){
    console.log("index values: ",i + " data value "+data[i]);
}
