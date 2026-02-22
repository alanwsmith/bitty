window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(payload, el) {
    await this.fetchFragment(this.#key, payload.url, payload.fallback);
    el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  run_$SIGNAL_NAME(_, __) {
    const fallbackElement = document.createElement("div");
    fallbackElement.innerHTML = "ok";
    const url = "/intentionally-missing-file.html";
    this.send(
      { url: url, fallback: fallbackElement },
      "test_$SIGNAL_NAME",
    );
  }
};
