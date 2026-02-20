window.Class2C3F3 = class {
  bittyReady() {
    this.trigger("given_signal_2C3F3");
  }

  given_signal_2C3F3(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_2C3F3");
  }

  test_signal_2C3F3(_, el) {
    const newFragment = document.createDocumentFragment();
    const result = this.addElement("el_signal_2C3F3", newFragment);
    if (result.ok === false) {
      // el.innerHTML = "ok";
    }
  }
};
