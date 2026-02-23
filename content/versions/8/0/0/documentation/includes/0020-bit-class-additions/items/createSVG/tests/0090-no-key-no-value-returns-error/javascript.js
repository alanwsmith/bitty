#key = "svg_signal_226E6";

test_signal_226E6(_, el) {
  const result = this.createSVG();
  // if (result.ok === false && result.level === "error") {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_226E6");
}
