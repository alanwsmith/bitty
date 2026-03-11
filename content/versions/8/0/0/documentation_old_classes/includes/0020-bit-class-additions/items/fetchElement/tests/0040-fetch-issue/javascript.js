

async signal_EFEFA(_, el) {
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchElement("el_EFEFA", url);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}