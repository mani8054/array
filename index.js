/*const readline = require("readline-sync");
let a=readline.questionInt(" value of a");
let b=readline.questionInt(" value of b");
let c=readline.questionInt(" value of c");
//   if else statement
if(a<b){
    console.log("value  is greather :"+a);
}
else if(a>b){

    console.log("value  is greather :"+b);
}
else{
    console.log("no one is greather than");
}*/
// logical operator
// const input=require("readline-sync");
// var a=input.questionInt("enter the value of a :");
//  if( a>=400 && a<=500){
//       if(a%2==0){
//         console.log("number is even :",a)
//       }
//       else{
//         console.log("number is odd :",a);
//       }
//  }
//  else{
//     console.log("onlyenter your value b/w 400 to 500..")
//  }
//  switch statement

/* const input=require("readline-sync");
var a,b,c,n;
a=input.questionInt("enter the first  number");
b=input.questionInt("enter the second  number");

console.log("press 1 for addition");
console.log("press 2 for subtraction");
console.log("press 3 for multiplication");
console.log("press 4 for divison");

n=input.questionInt("which button you want to press .....");



switch(n){
    case 1:{
        c=a+b;
        console.log("sum of the two number :",c);
        break
    }
    case 2:{
        c=a-b;
        console.log("subtraction of the two number :",c);
        break
    }
    case 3:{
        c=a*b;
        console.log("multiplication of the two number :",c);
        break
    }
    case 4:{
        c=a/b;
        console.log("divison of the two number :",c);
        break
    }
  default:{
    console.log("  wrong choice")
  }
}   */
// const input=require("readline-sync");
// var name=input.question("enter your name :")
// console.log("hi welcome to my room "+name);

//  looping in javascript


// const input=require("readline-sync");
// var b=100,a;
// a=++b;
// console.log("your  a value is :",a);
// console.log("your b value is :",b);
    
// for loop
// const input=require("readline-sync");
// var a,i;
// a=input.questionInt("enter your loop size");
// for(i=0;i<=a;i++){
// console.log("number is :",i);
// }
//table design
// const input=require("readline-sync");
// n=input.questionInt("enter which table you want bro ....");
// var i;
// for(i=1;i<=10;i++){
  
//     console.log("tabel is :"+n  + "*" +i +"= ",n*i);
//    }


// question3

const input=require("readline-sync");
let i,j,n;
n=input.questionInt("enter the loop size");
for(i=0;i<=n;i++){
    for(j=0;j<=i;j++){
       Process.stdout.write("*")
    }
    console.log("*");
}

