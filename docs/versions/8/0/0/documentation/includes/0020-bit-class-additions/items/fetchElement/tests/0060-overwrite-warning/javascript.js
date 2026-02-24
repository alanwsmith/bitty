#key = "el_signal_97CD8";

async signal_97CD8(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement("el_97CD8", url);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_97CD8", `<div>first</div>`);
  this.trigger("signal_97CD8");
}