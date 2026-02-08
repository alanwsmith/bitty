  #incomingValue = null;

  $METHOD_NAME(_, el) {
    this.#incomingValue = el.value;
    this.api.localTrigger("$METHOD_OUTPUT_NAME");
  }

  $METHOD_OUTPUT_NAME(_, el) {
    el.innerHTML = this.#incomingValue;
  }
