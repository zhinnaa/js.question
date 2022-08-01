
function tuckIn(arr1,arr2){
    let x=arr1.pop();
    for(let i=0;i<arr2.length;i++)
       arr1.push(arr2[i]);
    arr1.push(x);
    return arr1;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));