async signal_BE8EB(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchFragment("el_BE8EB", url);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}
