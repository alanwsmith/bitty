#key = "svg_signal_A6A28";

test_signal_A6A28(input, el) {
  const result = this.createSVG(this.#key, {
    key: "not a string or svg",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_A6A28");
}