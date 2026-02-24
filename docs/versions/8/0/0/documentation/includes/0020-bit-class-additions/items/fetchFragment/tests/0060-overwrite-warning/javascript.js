async signal_F9E7D(_, el) {
  this.setLocalLogLevel("none");
  this.createFragment("el_F9E7D", "<div></div>");
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchFragment("el_F9E7D", url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}
