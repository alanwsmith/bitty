  #incomingValue = null;

  $METHOD_NAME(_, el) {
    this.#incomingValue = el.valueToInt;
    this.api.localTrigger("$METHOD_OUTPUT_NAME");
  }

  $METHOD_OUTPUT_NAME(_, el) {
    el.innerHTML = this.#incomingValue;
  }

