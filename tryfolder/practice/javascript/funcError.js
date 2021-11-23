var arr=[];

Promise.allSettled([A(),B(),C(),D()])
  .then((value)=>{
      for(var i of value){
          if(i.status=='fulfilled'){
            arr.push(i.value)
          }
          
      }
    
    console.log(arr);
}).catch(console.log);

function A(){
    return new Promise((resolve,reject)=>{
        resolve("A Solved"); 
    });  
}

function B(){
    return new Promise((resolve,reject)=>{
        resolve("B Solved");
   });  
}

function C(){
    return new Promise((resolve,reject)=>{
        resolve("C Solved");
   });  
}

function D(){
    return new Promise((resolve,reject)=>{
        reject("D Rejected");
   });  
}






