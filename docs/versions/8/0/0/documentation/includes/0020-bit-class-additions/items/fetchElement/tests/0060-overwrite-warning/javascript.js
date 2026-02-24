#key = "el_signal_97CD8";

async signal_97CD8(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement(this.#key, url);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div>first</div>`);
  this.trigger("signal_97CD8");
}