window.ClassA83DA = class {
  #key = "element_signal_A83DA";

  async test_signal_A83DA(payload, el) {
    await this.fetchElement(this.#key, payload.url, payload.fallback);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  run_signal_A83DA(_, __) {
    const url = "/intentionally-missing-file.html";
    const fallback = document.createElement("div");
    fallback.innerHTML = "ok";
    fallback.classList.add("manual-test");
    this.send(
      { url: url, fallback: fallback },
      "test_signal_A83DA",
    );
  }
};
