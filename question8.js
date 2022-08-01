let arr=[2,4,5];
let max=arr[0];
let min=arr[0];
function minMax(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
          max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    };
   return [min,max];
};
console.log(minMax(arr));
