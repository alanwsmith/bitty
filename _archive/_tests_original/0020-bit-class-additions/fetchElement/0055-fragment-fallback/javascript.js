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
    const url = "/intentionally-missing-file.html";
    const fallback = document.createElement("template");
    fallback.innerHTML = `<div class="manual-test">ok</div>`;
    this.send(
      { url: url, fallback: fallback.content },
      "test_$SIGNAL_NAME",
    );
  }
};
