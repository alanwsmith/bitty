export default class {
  #currentState = "Off";

  update(_event, element) {
    if (this.#currentState === "Off") {
      this.#currentState = "On";
    } else {
      this.#currentState = "Off";
    }
    element.innerHTML = this.#currentState;
  }
}
