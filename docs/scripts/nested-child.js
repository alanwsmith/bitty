// deno-fmt-ignore-file

export default class {
  #value = 0;

  increment(_event) {
    this.#value += 1;
  }

  updateNested(el, _event) {
    el.innerHTML = this.#value;
  }
}
