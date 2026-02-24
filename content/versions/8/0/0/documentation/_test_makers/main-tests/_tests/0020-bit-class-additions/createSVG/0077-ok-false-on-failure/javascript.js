#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(input, el) {
  const result = this.createSVG("el_$HASH", {
    key: "not a string or svg",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}