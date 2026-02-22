#key = "element_signal_F5B52";

async test_signal_F5B52(payload, el) {
  await this.fetchElement(this.#key, payload.url, payload.fallback);
  el.replaceWith(this.renderElement(this.#key));
}


run_signal_F5B52(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = document.createElement("template");
  fallback.innerHTML = `<div class="manual-test">ok</div>`;
  this.send(
    { url: url, fallback: fallback.content },
    "test_signal_F5B52",
  );
}