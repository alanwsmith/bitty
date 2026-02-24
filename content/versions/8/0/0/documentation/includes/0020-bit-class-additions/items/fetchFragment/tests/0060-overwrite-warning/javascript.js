

async signal_F9E7D(url, el) {
  const result = await this.fetchFragment("el_F9E7D", url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_F9E7D");
}

given_signal_F9E7D(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_F9E7D", "<div></div>");
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "signal_F9E7D");
}