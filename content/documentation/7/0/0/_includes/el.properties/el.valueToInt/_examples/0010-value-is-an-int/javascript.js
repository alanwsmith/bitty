window.[@ item.name|title @][@ item.memberof|title @][@ supplemental_string @] = class {
  #incomingValue = null;

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("valueToIntElOutput");
  }

  valueToIntElOutput(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}
