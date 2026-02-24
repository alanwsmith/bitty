async signal_9F02E(_, el) {
  const url = "/intentionally-missing-file.svg";
  const result = await this.fetchSVG("el_9F02E", url);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}
