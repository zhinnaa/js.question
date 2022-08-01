function addFunction(str){
    return function(str1){
        return str1+str;
    }
}
let add_ly=addFunction("ly");
console.log(add_ly("diar"));