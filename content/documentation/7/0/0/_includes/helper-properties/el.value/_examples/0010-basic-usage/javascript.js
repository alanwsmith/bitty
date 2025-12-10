window.ValueEl = class {
  #incomingValue = null;

  valueEl(_, el) {
    this.#incomingValue = el.value;
    this.api.localTrigger("valueElOutput");
  }

  valueElOutput(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}