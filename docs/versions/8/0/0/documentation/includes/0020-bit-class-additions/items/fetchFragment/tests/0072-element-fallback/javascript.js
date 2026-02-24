

async signal_11320(payload, el) {
  await this.fetchFragment("el_11320", payload.url, payload.fallback);
  el.innerHTML = this.renderFragment("el_11320").children[0].innerHTML;
}


run_signal_11320(_, __) {
  const fallbackElement = document.createElement("div");
  fallbackElement.innerHTML = "ok";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallbackElement },
    "signal_11320",
  );
}