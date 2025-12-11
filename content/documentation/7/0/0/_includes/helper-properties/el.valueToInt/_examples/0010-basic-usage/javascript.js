window.[@ item.name|title @][@ item.memberof|title @] = class {
  #incomingValue = null;

  valueToIntEl(_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("valueToIntElOutput");
  }

  valueToIntElOutput(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}