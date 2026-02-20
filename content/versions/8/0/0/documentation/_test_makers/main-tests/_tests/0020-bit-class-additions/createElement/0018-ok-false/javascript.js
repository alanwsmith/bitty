window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const newFragment = document.createDocumentFragment();
    const result = this.addElement("el_$SIGNAL_NAME", newFragment);
    if (result.ok === false) {
      // el.innerHTML = "ok";
    }
  }
};
