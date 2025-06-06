// deno-fmt-ignore-file

export default class {
  #value = 0;

  _increment(_) {
    this.#value += 1;
  }

  $showValue(el, _) {
    el.innerHTML = this.#value;
  }

  get value() {
    return this.#value;
  }

  template() {
    return `
<button data-c="increment" data-s="showValue" data-r="showValue"></button>
`;
  }
}
