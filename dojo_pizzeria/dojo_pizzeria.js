function pizzaOven(crust,sause,cheese,toppings){
    var pizza={};
    pizza.crust=crust;
    pizza.sause=sause;
    pizza.cheese=cheese;
    pizza.toppings=toppings

    return pizza;
}
var pizza1=pizzaOven("deep dish","traditional",["mozzarella"],["pepporoni","sausage"])
var pizza2=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
console.log(pizza1,pizza2);