window.$CLASS_NAME = class {
  #key = "element_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(payload, el) {
    await this.fetchElement(this.#key, payload.url, payload.fallback);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  run_$SIGNAL_NAME(_, __) {
    const fallback = `<div class="manual-test">ok</div>`;
    const url = "/intentionally-missing-file.html";
    this.send(
      { url: url, fallback: fallback },
      "test_$SIGNAL_NAME",
    );
  }
};
