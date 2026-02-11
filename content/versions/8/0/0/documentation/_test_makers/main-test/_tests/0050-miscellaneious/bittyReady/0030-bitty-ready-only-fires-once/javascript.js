window.$CLASS_NAME = class {
  #count = 0;

  bittyReady() {
    this.#count += 1;
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (this.#count === 1) {
      el.innerHTML = "ok";
    }
  }
};
