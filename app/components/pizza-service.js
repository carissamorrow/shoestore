import Pizza from "../models/pizza.js";
import Topping from "../models/topping.js";

let _pizza = new Pizza()

let availableToppings = {
  pepperoni: new Topping("pepperoni", "img", .50),
  extraCheese: new Topping("extra-cheese", "img", 1.00),
  sausage: new Topping("sausage", "img", 1.00),
  pineapple: new Topping("pineapple", "img", 2.00)
}


export default class PizzaService {
  addTopping(toppingName) {
    _pizza.toppings.push(availableToppings[toppingName])
    console.log(_pizza.toppings)
  }
  constructor() {
  }

  getTotal(availableToppings) {
    let total = 0
    for (let i = 0; i < _pizza.toppings.length; i++) {
      const topping = _pizza.toppings[i];
      total += topping.purchase
    }
    console.log(total)

    return total
  }
}