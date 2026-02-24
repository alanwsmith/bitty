#key = "svg_signal_B7C32";

signal_B7C32(_, el) {
  const result = this.createSVG(this.#key);
  // if (result.ok === false && result.level === "error") {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_B7C32");
}
