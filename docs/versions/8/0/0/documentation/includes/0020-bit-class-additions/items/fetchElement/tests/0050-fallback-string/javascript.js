#key = "element_signal_BB20D";

async signal_BB20D(payload, el) {
  await this.fetchElement("el_BB20D", payload.url, payload.fallback);
  el.replaceWith(this.renderElement("el_BB20D"));
}


run_signal_BB20D(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = `<div class="manual-test">ok</div>`;
  this.send(
    { url: url, fallback: fallback },
    "signal_BB20D",
  );
}