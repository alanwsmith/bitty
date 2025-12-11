window.[@ item.name|title @][@ item.memberof|title @] = class {
  #incomingValue = null;

  valueToFloatEl(_, el) {
    this.#incomingValue = el.valueToFloat;
    this.api.localTrigger("valueToFloatElOutput");
  }

  valueToFloatElOutput(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}