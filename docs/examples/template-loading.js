export class Wires {
  #value = 0;

  _increment(_) {
    this.#value += 1;
  }

  $showValue(el, _) {
    el.innerHTML = this.#value;
  }

  init() {
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
<p>
  This is a template loaded via the Wrapper. 
It catches the component's init signal and is funnly functional
</p>
<button data-f="increment" data-s="showValue" data-r="showValue"></button>
`;
  }
}
