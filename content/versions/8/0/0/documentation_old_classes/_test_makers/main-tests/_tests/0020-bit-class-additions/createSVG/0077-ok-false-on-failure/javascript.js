$SIGNAL_NAME(input, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createSVG("el_$HASH", {
    key: "not a string or svg",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

