export class Wires {
  #name;
  #value = 0;

  _increment(_) {
    this.#value += 1;
  }

  $showValue(el, _) {
    el.innerHTML = this.#value;
  }

  init() {
    this.#name = this.bridge.dataset.name;
    this.loadTemplate();
  }

  loadTemplate() {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.template();
    this.bridge.append(skeleton.content.cloneNode(true));
    this.bridge.loadReceivers();
  }

  template() {
    return `
<div>${this.#name}</div>
<button data-f="increment" data-s="showValue" data-r="showValue"></button>`;
  }
}
