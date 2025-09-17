export default class {
  #value = 0;

  increment(_) {
    this.#value += 1;
  }

  showValue(_event, el) {
    el.innerHTML = this.#value;
  }

  template() {
    return `
<p>
  This is a template loaded via the Wrapper. 
  It catches the component's init signal and is fully functional
</p>
<button data-call="increment" data-send="showValue" data-receive="showValue"></button>
`;
  }
}
