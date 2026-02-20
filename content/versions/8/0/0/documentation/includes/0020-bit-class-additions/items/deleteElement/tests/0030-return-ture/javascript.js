window.Class299D6 = class {
  #key = "el_signal_299D6";

  bittyReady() {
    this.trigger("given_signal_299D6");
  }

  given_signal_299D6(_, __) {
    this.setLogLevel("none");
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_299D6");
  }

  test_signal_299D6(_, el) {
    const result = this.removeElement(this.#key);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};
