
function sortDrinkByPrice(drinks){
    for(let i=0;i<drinks.length;i++){
        for(let j=i+1;j<drinks.length;j++){
            if(drinks[j].price<drinks[i].price){
                /*let temp=drinks[j];
                drinks[j]=drinks[i];
                drinks[i]=temp;*/
                [drinks[i], drinks[j]]=[drinks[j],drinks[i]];
            }
        }
    }
    return drinks;
}
console.log(sortDrinkByPrice([{name: "lime", price:50}, {name: "lemonade", price: 10}]));