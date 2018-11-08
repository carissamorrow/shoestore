import PizzaController from "./components/pizza-controller.js";

class App {
  constructor() {
    this.controllers = {
      pizzaController: new PizzaController()
    }
  }
}

// @ts-ignore
window.app = new App()