window.ClassADA93 = class {
  bittyReady() {
    this.trigger("given_signal_ADA93");
  }

  given_signal_ADA93(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_ADA93");
  }

  test_signal_ADA93(_, el) {
    const newFragment = document.createDocumentFragment();
    const result = this.addElement("el_signal_ADA93", newFragment);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};
