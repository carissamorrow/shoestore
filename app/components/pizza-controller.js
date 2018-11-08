import PizzaService from "./pizza-service.js";

let _pizzaService = new PizzaService()


function drawTotal() {
  let total = _pizzaService.getTotal()

  document.getElementById('balance').innerHTML = total.toString()
}

export default class PizzaController {
  constructor() {

  }
  addTopping(toppingName) {
    _pizzaService.addTopping(toppingName)
  }
  getTotal() {
    document.getElementById('balance').innerText = _pizzaService.getTotal().toString()
  }
}