// deno-fmt-ignore-file

export default class {
  #value = 0;

  _increment(_) {
    this.#value += 1;
  }

  $showValue(el, _) {
    el.innerHTML = this.#value;
  }

  template() {
    return `
<div>${this.bridge.dataset.name}</div>
<button data-c="increment" data-s="showValue" data-r="showValue"></button>`;
  }
}
