async $SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", "<div></div>");
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchFragment("el_$HASH", url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}
