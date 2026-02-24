#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.createSVG(this.#key);
  // if (result.ok === false && result.level === "error") {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}
