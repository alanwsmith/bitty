window.ClassBC352 = class {
  #key = "el_signal_BC352";

  bittyReady() {
    this.trigger("given_signal_BC352");
  }

  given_signal_BC352(_, __) {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    delete this.element[this.#key];
    this.trigger("test_signal_BC352");
  }

  test_signal_BC352(_, el) {
    const result = this.removeElement(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }
};
