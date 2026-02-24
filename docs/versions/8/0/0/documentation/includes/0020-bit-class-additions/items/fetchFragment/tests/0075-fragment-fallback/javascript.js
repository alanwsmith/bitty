

async signal_80552(payload, el) {
  await this.fetchFragment(this.#key, payload.url, payload.fallback);
  el.innerHTML = this.renderFragment(this.#key).children[0].innerHTML;
}


run_signal_80552(_, __) {
  const fallbackTemplate = document.createElement("template");
  fallbackTemplate.innerHTML = "<div>ok</div>";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallbackTemplate.content },
    "signal_80552",
  );
}