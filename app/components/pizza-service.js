import toppings from "../models/toppings.js";
import Pizza from "../models/pizza.js";
import Toppings from "../models/toppings.js";

let _pizza = new Pizza()
let _toppings = new Toppings()



export default class PizzaService {
  constructor() {
  }

  getBalance() {
    return _pizza.balance
  }

  getPizza() {
    return JSON.parse(JSON.stringify(_pizza))
  }


  getToppings() {
    return JSON.parse(JSON.stringify(_toppings))
  }
  purchase(index) {

  }
}