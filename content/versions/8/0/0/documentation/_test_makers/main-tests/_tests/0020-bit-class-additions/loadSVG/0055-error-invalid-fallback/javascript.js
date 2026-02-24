#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.loadSVG(this.#key, {
    misc: "objects are not valid fallbacks",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}
