export default class {
  #value = 0;

  increment(_) {
    this.#value += 1;
  }

  showValue(_event, element) {
    element.innerHTML = this.#value;
  }

  get value() {
    return this.#value;
  }

  template() {
    return `
<button data-call="increment" data-send="showValue" data-receive="showValue"></button>
`;
  }
}