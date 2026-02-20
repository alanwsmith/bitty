window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.removeElement(this.#key);
    const result = this.loadElement(this.#key);
    if (result.level === "error" && result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
