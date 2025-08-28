// deno-fmt-ignore-file

export default class {
  #currentState = "Off";

  displayCount(el, _event) {
    if (this.#currentState === "Off") {
      this.#currentState = "On";
    } else {
      this.#currentState = "Off";
    }
    el.innerHTML = this.#currentState;
  }
}
