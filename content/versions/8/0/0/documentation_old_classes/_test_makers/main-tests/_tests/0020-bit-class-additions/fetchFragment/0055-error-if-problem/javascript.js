async $SIGNAL_NAME(_, el) {
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchFragment("el_$HASH", url);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
