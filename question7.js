
//function myMap(arr,func){
  // let arr2=[]
  // for(let i in arr){
    //  arr2.push(func (arr[i]));
   // }
    //return arr2;
//}

let arr=[1,2,3,4,6];
//console.log(myMap(arr,function(item){return item*2}))

function myFilter(arr1,func){
   let arr3=[];
for(let i in arr1){
   if(func==true){
      arr3.push(arr1[i]);
   }
}
return arr3;
}
console.log(myFilter(arr,function(item){return item>3}));