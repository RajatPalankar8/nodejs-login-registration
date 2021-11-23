function myFunction(){
    document.getElementById("demo").innerHTML="Hello";
}

function myFunction2(){
    let header = "This is Heading";
    let arraylist = ["a1","a2","a3","a4"];
   

    let html = `<h1> ${header} </h1> <ul>`;

    for(const i of arraylist){
        html += `<li> ${i} </li>`;
    }

    html += `</ul>`

    document.getElementById("demo1").innerHTML = html;
}

function getTime(){
    
    return new Promise((resolve,reject)=>{
     
        resolve();
    }).then(response => {
        var d = new Date();
        console.log(d);
        document.getElementById("hour").innerHTML = d.getHours();
        document.getElementById("min").innerHTML = d.getMinutes();
        document.getElementById("sec").innerHTML = d.getSeconds();
    });
    
}

setInterval(()=>{
   getTime();
   
},1000)



 

