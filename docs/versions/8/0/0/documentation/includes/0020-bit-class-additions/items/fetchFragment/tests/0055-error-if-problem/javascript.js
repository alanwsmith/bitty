

async signal_C7878(url, el) {
  const result = await this.fetchFragment("el_C7878", url);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


run_signal_C7878(_, __) {
  const url = "/non-exising-page.html";
  this.send(url, "signal_C7878");
}