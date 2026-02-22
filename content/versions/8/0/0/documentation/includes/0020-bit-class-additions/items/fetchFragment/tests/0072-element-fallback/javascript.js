#key = "fragment_signal_11320";

async test_signal_11320(payload, el) {
  await this.fetchFragment(this.#key, payload.url, payload.fallback);
  el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
}


run_signal_11320(_, __) {
  const fallbackElement = document.createElement("div");
  fallbackElement.innerHTML = "ok";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallbackElement },
    "test_signal_11320",
  );
}