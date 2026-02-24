#key = "element_$SIGNAL_NAME";

async $SIGNAL_NAME(payload, el) {
  await this.fetchElement("el_$HASH", payload.url, payload.fallback);
  el.replaceWith(this.renderElement("el_$HASH"));
}


run_$SIGNAL_NAME(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = `<div class="manual-test">ok</div>`;
  this.send(
    { url: url, fallback: fallback },
    "$SIGNAL_NAME",
  );
}