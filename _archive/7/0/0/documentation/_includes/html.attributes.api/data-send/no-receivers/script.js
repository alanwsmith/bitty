window.NoReceivers = class {
  #count = 0;

  noReceivers(_event, _el) {
    this.#count += 1;
    const outputEl = document.querySelector(
      ".no-receiver-output"
    );
    outputEl.innerHTML = this.#count;
  }
}