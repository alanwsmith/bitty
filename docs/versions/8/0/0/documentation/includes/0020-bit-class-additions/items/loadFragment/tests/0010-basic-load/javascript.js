window.Class5D60F = class {
  #key = "fragment_signal_5D60F";

  test_signal_5D60F(_, el) {
    this.loadFragment(this.#key);
    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_5D60F");
  }

  given_signal_5D60F(_, __) {
    this.setLogLevel("none");
    this.addFragment(this.#key, "<div>ok</div>");
    delete this._fragment[this.#key];
    this.trigger("test_signal_5D60F");
  }
};
