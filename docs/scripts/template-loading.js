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
<p>
  This is a template loaded via the Wrapper. 
  It catches the component's init signal and is fully functional
</p>
<button data-c="increment" data-s="showValue" data-r="showValue"></button>
`;
  }
}
