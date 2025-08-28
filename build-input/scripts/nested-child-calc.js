// deno-fmt-ignore-file

export default class {
  #value = 0;

  increment(_) {
    this.#value += 1;
  }

  showValue(el, _) {
    el.innerHTML = this.#value;
  }

  get value() {
    return this.#value;
  }

  template() {
    return `
<button data-call="increment" data-send="showValue" data-recieve="showValue"></button>
`;
  }
}
