export default class {
  #currentState = "Off";

  updateStoredState(_event, element) {
    if (this.#currentState === "Off") {
      this.#currentState = "On";
    } else {
      this.#currentState = "Off";
    }
    element.innerHTML = this.#currentState;
  }
}