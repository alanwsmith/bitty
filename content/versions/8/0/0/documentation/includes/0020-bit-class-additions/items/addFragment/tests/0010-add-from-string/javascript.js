window.Class73BA7 = class {
  #key = "fragment_signal_73BA7";

  test_signal_73BA7(_, el) {
    this.addFragment(this.#key, `<div>x</div><div>ok</div>`);
    el.innerHTML = this.fragment[this.#key].children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_73BA7");
  }

  given_signal_73BA7(_, __) {
    this.trigger("test_signal_73BA7");
  }
};
