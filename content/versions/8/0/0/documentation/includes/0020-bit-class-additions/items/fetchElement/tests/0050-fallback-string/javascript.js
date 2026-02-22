#key = "element_signal_BB20D";

async test_signal_BB20D(payload, el) {
  await this.fetchElement(this.#key, payload.url, payload.fallback);
  el.replaceWith(this.renderElement(this.#key));
}


run_signal_BB20D(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = `<div class="manual-test">ok</div>`;
  this.send(
    { url: url, fallback: fallback },
    "test_signal_BB20D",
  );
}