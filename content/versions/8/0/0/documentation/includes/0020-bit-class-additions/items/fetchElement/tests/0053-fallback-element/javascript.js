#key = "element_signal_A83DA";

async signal_A83DA(payload, el) {
  await this.fetchElement("el_A83DA", payload.url, payload.fallback);
  el.replaceWith(this.renderElement("el_A83DA"));
}


run_signal_A83DA(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = document.createElement("div");
  fallback.innerHTML = "ok";
  fallback.classList.add("manual-test");
  this.send(
    { url: url, fallback: fallback },
    "signal_A83DA",
  );
}