$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createElement("el_$HASH", {
    misc: "invalid payload",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
