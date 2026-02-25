async signal_C7878(_, el) {
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchFragment("el_C7878", url);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
