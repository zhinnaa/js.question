let str;

function countBs(str){
    let sum=0;
    for( let i=0; i<str.length;i=i+1){
        if(str.charAt(i)=="B"){
sum=sum+1;
        }
    }
  return sum;

};
let x;
let x1;
function countChar(x,x1){
    let sum1=0;
    for(let i=0;i<x.length;i=i+1){
        if(x.charAt(i)==x1){
            sum1=sum1+1;
        }
    }
    return sum1;
}
console.log(countBs("Banana"));
console.log(countBs("BaBa"));
console.log(countChar("Banana","a"));