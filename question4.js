let arr=[1,2];
function reverseArray(arr){
    let array1=[];
    for(let i=arr.length-1;i>=0;i--){
       array1.push(arr[i]);
    }
    return array1;
}

console.log(reverseArray(arr));
 function reverseArrayInPlace(arr){
    for(let i=arr.length-1;i>=0;i--){
        arr.push(arr[i]);
    }
    return arr;
}
console.log(reverseArrayInPlace(arr));