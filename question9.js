function minMax(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
          max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
   return [min,max];
}
function canNest(arr1,arr2){
    let a=minMax(arr1);
    let b=minMax(arr2);
    if(a[0]>b[0] && a[1]<b[1] ){
        return true;
    }
    else{
        return false;
    }

}
console.log(canNest([1, 2, 3, 4], [0, 6]) );