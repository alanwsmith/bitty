#key = "fragment_$SIGNAL_NAME";

async test_$SIGNAL_NAME(url, el) {
  const result = await this.fetchFragment(this.#key, url);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


run_$SIGNAL_NAME(_, __) {
  const url = "/non-exising-page.html";
  this.send(url, "test_$SIGNAL_NAME");
}