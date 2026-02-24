#key = "svg_signal_609BD";

signal_609BD(_, el) {
  const result = this.loadSVG(this.#key, {
    misc: "objects are not valid fallbacks",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_609BD");
}
