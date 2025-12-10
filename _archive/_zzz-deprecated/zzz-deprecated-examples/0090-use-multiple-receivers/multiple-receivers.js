// deno-fmt-ignore-file

export default class {
  #number;

  setNumber(event) {
    this.#number = event.target.value;
  }

  displayNumber(el, _event) {
    el.innerHTML = this.#number;
  }
}

