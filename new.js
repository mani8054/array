const input=require("readline-sync");
 let  data=array=[];
 console.log("array is empty");
function show(){
  if (data.length==0){
    
    for(i=0;i<=10;i++){
      var neww=input.question("enter your name : ");
      data.push(neww);
      
    }
  }
     console.log("rollno:"+i+"name of the students: "+data);
    console.log("total students : "+data.length);
    
  }
 
show();

