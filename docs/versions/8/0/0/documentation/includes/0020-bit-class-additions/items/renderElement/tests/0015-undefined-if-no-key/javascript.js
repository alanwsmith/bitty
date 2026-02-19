window.Class30B5D = class {
  #key = "el_signal_30B5D";

  bittyReady() {
    this.trigger("given_signal_30B5D");
  }

  given_signal_30B5D(_, __) {
    this.trigger("test_signal_30B5D");
  }

  test_signal_30B5D(_, el) {
    if (this.renderElement(this.#key) === undefined) {
      el.innerHTML = "ok";
    }
  }
};
