async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchFragment("el_$HASH", url);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}
