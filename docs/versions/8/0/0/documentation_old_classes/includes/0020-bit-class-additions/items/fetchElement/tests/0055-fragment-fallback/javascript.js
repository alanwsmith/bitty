#key = "element_signal_F5B52";

async signal_F5B52(payload, el) {
  await this.fetchElement("el_F5B52", payload.url, payload.fallback);
  el.replaceWith(this.renderElement("el_F5B52"));
}


run_signal_F5B52(_, __) {
  const url = "/intentionally-missing-file.html";
  const fallback = document.createElement("template");
  fallback.innerHTML = `<div class="manual-test">ok</div>`;
  this.send(
    { url: url, fallback: fallback.content },
    "signal_F5B52",
  );
}