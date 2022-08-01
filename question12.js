function filterArray(arr){
    let arr1=[];
    for(let i in arr){
        if( arr[i]>=0 && typeof (arr[i])=='number'){
            console.log("number");
         arr1.push(arr[i]);
        }   
    }
    return arr1;
}
let ae=[1,"a","b",0,15,'1',-1];
console.log(filterArray(ae));
