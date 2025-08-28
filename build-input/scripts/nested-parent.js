// deno-fmt-ignore-file

export default class {
  #value = 0;

  increment(_) {
    this.#value += 1;
  }

  showValue(el, _) {
    el.innerHTML = this.#value;
  }
}
