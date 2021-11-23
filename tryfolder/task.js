// var initial = 0;
// var runEverySec = setInterval(PrintCountTime, 100);
// console.log(runEverySec);
// function PrintCountTime() {
//     console.log(initial);
//     if(initial == 100){
//         clearInterval(runEverySec);
//     }
//     initial++;
//     return initial;
// }

//  processData();

// async function  processData() {
//     for(var init = 0; init<=100;init++){
//         var promiss = await start(init);
//         if(promiss){
//           console.log(init);
//         }
       
      
//     }
// }

// function start(init){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//          if(init%2==0){
//           resolve(true);
//          }else{
//            resolve(false);
//          }
//     }, 300);
//   });
// }

// console.log("\"SLICE\"");
// var company =" SenseGiz"
// var message = `Welcome to ${company}`

// var a = 10,b = 20;

// console.log(`Substitutation ${a+b}`);
// const arraylist = ["a","b","c","d"];
// arraylist[4] = "e";
// console.log(arraylist);


// for( var i of arraylist){
//   console.log(i);
// }


// const person = {first:'Rajat',
//                   last:'Palankar',
//                   age:26,
//                   getName:function(){console.log(` ${this.first}, ${this.last} ${this.age}`)}};

// console.log(person.getName());

// const num = [4,5,8,15,25,30];


// const numMap = num.map(value=>{
//     var sqrt = Math.sqrt(value);

//     return Math.round(sqrt);
// });

// console.log(numMap);


// num.forEach(PrintNumber)
// function PrintNumber(value,index,array){
//   console.log(`Index ${index}, Value ${value}`);
//    console.log(array);
// }

const name = "Rajat Palankar"

const map = Array.prototype.map;

const newName = map.call(name,splitName=>{
     if(splitName==""){

     }else{
      return `${splitName}`;
     }
 
});

console.log(newName);
