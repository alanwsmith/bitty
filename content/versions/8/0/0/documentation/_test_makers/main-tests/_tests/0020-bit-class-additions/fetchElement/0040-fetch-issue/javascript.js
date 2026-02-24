

async $SIGNAL_NAME(_, el) {
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchElement("el_$HASH", url);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}