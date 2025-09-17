export default class {
  #currentState = "Off";

  update(_event, el) {
    if (this.#currentState === "Off") {
      this.#currentState = "On";
    } else {
      this.#currentState = "Off";
    }
    el.innerHTML = this.#currentState;
  }
}
