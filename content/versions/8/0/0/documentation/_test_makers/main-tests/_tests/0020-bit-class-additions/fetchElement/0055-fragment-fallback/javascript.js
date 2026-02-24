#key = "element_$SIGNAL_NAME";

async $SIGNAL_NAME(payload, el) {
  await this.fetchElement(this.#key, payload.url, payload.fallback);
  el.replaceWith(this.renderElement(this.#key));
}


run_$SIGNAL_NAME(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = document.createElement("template");
  fallback.innerHTML = `<div class="manual-test">ok</div>`;
  this.send(
    { url: url, fallback: fallback.content },
    "$SIGNAL_NAME",
  );
}