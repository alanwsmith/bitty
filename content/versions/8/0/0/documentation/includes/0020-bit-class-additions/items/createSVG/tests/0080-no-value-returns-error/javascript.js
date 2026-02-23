#key = "svg_signal_B7C32";

test_signal_B7C32(_, el) {
  const result = this.createSVG(this.#key);
  // if (result.ok === false && result.level === "error") {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_B7C32");
}
