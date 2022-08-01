function makePlusFunction(num) {
    return function (a) {
        return a + num;
    }
}
let st=makePlusFunction(5);
console.log(st(7));


