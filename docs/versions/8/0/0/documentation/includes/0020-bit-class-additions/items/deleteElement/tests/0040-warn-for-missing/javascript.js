window.Class06635 = class {
  #key = "el_signal_06635";

  bittyReady() {
    this.trigger("given_signal_06635");
  }

  given_signal_06635(_, __) {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    delete this.element[this.#key];
    this.trigger("test_signal_06635");
  }

  test_signal_06635(_, el) {
    const result = this.removeElement(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }
};
