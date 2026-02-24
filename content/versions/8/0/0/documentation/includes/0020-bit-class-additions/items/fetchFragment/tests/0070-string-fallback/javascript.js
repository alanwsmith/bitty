

async signal_F3B99(payload, el) {
  await this.fetchFragment(this.#key, payload.url, payload.fallback);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


run_signal_F3B99(_, __) {
  const fallback = "<div></div><div>ok</div>";
  const url = "/intentionally-missing-file.html";
  this.send(
    { url: url, fallback: fallback },
    "signal_F3B99",
  );
}