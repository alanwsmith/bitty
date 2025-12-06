window.[@ item.name|title @][@ item.memberof|title @] = class {
  #incomingValue = null;

  valueToIntElExample(_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("valueToIntElExampleOutput");
  }

  valueToIntElExampleOutput(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}