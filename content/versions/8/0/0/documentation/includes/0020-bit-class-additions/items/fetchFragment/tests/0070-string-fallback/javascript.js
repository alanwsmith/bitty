window.ClassF3B99 = class {
  #key = "fragment_signal_F3B99";

  async test_signal_F3B99(payload, el) {
    await this.fetchFragment(this.#key, payload.url, payload.fallback);
    el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  run_signal_F3B99(_, __) {
    const fallback = "<div></div><div>ok</div>";
    const url = "/intentionally-missing-file.html";
    this.send(
      { url: url, fallback: fallback },
      "test_signal_F3B99",
    );
  }
};
