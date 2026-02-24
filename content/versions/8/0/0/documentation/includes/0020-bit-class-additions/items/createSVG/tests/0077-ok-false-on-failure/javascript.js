#key = "svg_signal_A6A28";

signal_A6A28(input, el) {
  const result = this.createSVG("el_A6A28", {
    key: "not a string or svg",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_A6A28");
}