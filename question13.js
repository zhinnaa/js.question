function sortByLength(arr){
for(let i in arr){
    for(let j in arr){
        if(arr[i].length<arr[j].length){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
    
        }
    }
    
   
}
return arr;
}
let x=["ax","abb","a","wedd"];
console.log(sortByLength(x));