#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.createSVG();
  // if (result.ok === false && result.level === "error") {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}
