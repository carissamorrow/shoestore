import PizzaService from "./pizza-service";

let _pizzaService = new PizzaService()

function drawToppings() {
  let template = ''
  let pizza = _pizzaService.getPizza()

  template += `
    <div class="col-pizza">
    <img src="${pizza.img}"/>
    <h5>${pizza.name}</h5>
    <button class="btn btn-primary" onclick="app.controller.pizzaController.purchase(${''})">Purchase: ${pizza.purchase}</button>
    </div>
    `
  document.getElementById('main-content').innerHTML = template
}

function drawMoney() {
  let balance = _pizzaService.getBalance()

}

export default class PizzaController {
  constructor() {
    drawMoney()
  }
}