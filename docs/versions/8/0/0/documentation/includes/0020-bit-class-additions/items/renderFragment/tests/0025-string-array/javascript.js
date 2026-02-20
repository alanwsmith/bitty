window.Class378AE = class {
  #key = "fragment_signal_378AE";

  test_signal_378AE(_, el) {
    const subs = {
      "TARGET_378AE": ["o", "k"],
    };
    const fragment = this.renderFragment(this.#key, subs);
    el.innerHTML = fragment.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_378AE");
  }

  given_signal_378AE(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div></div><div>TARGET_378AE</div>`);
    this.trigger("test_signal_378AE");
  }
};
