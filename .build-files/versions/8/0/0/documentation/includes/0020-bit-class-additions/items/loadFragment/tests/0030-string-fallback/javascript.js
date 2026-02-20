window.Class38302 = class {
  #key = "fragment_signal_38302";

  test_signal_38302(_, el) {
    this.loadFragment(this.#key, `<div></div><div>ok</div>`);
    el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_38302");
  }

  given_signal_38302(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.trigger("test_signal_38302");
  }
};
