#key = "element_$SIGNAL_NAME";

async test_$SIGNAL_NAME(payload, el) {
  await this.fetchElement(this.#key, payload.url, payload.fallback);
  el.replaceWith(this.renderElement(this.#key));
}


run_$SIGNAL_NAME(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = document.createElement("div");
  fallback.innerHTML = "ok";
  fallback.classList.add("manual-test");
  this.send(
    { url: url, fallback: fallback },
    "test_$SIGNAL_NAME",
  );
}