var sortFormat = [1,2,0];
var unsortarr =[1,0,1,2,0,1,2,0,1,2,1];
var sorted = [];

for (var i of sortFormat)
{
    for(var inner of unsortarr)
    {
        if(i === inner){
           sorted.push(inner);
        }
    }
   
}
console.log("Your Selected Format : "+sortFormat);
console.log("unsorted form : "+unsortarr);
console.log(" Sorted as per format given :"+sorted);