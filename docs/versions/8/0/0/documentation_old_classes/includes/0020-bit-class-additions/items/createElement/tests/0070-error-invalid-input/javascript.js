signal_C244B(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createElement("el_C244B", { misc: "not a valid input" });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
