window.ClassDE329 = class {
  #key = "el_signal_DE329";

  bittyReady() {
    this.trigger("given_signal_DE329");
  }

  given_signal_DE329(_, __) {
    this.setLogLevel("none");
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_DE329");
  }

  test_signal_DE329(_, el) {
    this.removeElement(this.#key);
    const result = this.loadElement(this.#key);
    if (result.level === "error" && result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
