window.Class4B803 = class {
  #key = "el_signal_4B803";

  bittyReady() {
    this.trigger("given_signal_4B803");
  }

  given_signal_4B803(_, __) {
    this.setLogLevel("none");
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_4B803");
  }

  test_signal_4B803(_, el) {
    const result = this.removeElement(this.#key);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};
