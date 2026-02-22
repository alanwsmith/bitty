#key = "fragment_signal_C7878";

async test_signal_C7878(url, el) {
  const result = await this.fetchFragment(this.#key, url);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


run_signal_C7878(_, __) {
  const url = "/non-exising-page.html";
  this.send(url, "test_signal_C7878");
}