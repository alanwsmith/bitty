// deno-fmt-ignore-file

export default class {
  #currentState = "Off";

  update(el, _event) {
    if (this.#currentState === "Off") {
      this.#currentState = "On";
    } else {
      this.#currentState = "Off";
    }
    el.innerHTML = this.#currentState;
  }
}
