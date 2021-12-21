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

var crust_types=["Deep dish", "Traditional Pan", "Flatbread/Focaccia", "Thick Crust", "Thin Crust"]
var sause_types=["Pesto", "White Garlic Sauce","Garlic Ranch Sauce","Buffalo Sauce", "Marinara Sauce"]
var pizza_toppings=["pepporoni","Sausage","Mushrooms","olives","jalapeno","bell pepper","pineapple","Onion","Garlic"]
var cheese_types=["parmesan","mozzarella","feta"]

function generateRandomNumber(array){
    return Math.floor(Math.random()*array.length);
}

function randomToppingsGenerator(toppings){
    var randomNum= generateRandomNumber(toppings)
    var selectedToppings=[];
    for(i=0; i<randomNum;i++){
        selectedToppings[i]=toppings[generateRandomNumber(toppings)];
    }
    return selectedToppings;
}

function randomPizzaGenerator(){
    var crust=crust_types[generateRandomNumber(crust_types)];
    var sause=sause_types[generateRandomNumber(sause_types)];
    var cheese=cheese_types[generateRandomNumber(cheese_types)];
    var toppings=randomToppingsGenerator(pizza_toppings);
    var randomPizza=pizzaOven(crust,sause,cheese,toppings)
    return randomPizza
}

var randomPizza=randomPizzaGenerator();
console.log(randomPizza)