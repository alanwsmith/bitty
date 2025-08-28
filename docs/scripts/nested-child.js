// deno-fmt-ignore-file

export default class {
  #value = 0;

  increment(_) {
    this.#value += 1;
  }

  showValue(el, _event) {
    el.innerHTML = this.#value;
  }

  template() {
    return `
<div>${this.bridge.dataset.name}</div>
<button data-call="increment" data-send="showValue" data-recieve="showValue"></button>`;
  }
}
