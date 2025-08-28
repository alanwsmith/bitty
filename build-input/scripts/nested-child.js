// deno-fmt-ignore-file

export default class {
  #value = 0;

  updateChild(el, _event) {
    this.#value += 1;
    el.innerHTML = this.#value;
  }
}
