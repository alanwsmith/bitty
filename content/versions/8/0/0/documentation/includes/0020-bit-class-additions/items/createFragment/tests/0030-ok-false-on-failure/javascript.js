signal_C8DB8(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createFragment("el_C8DB8", {
    key: "not a string, element, or document fragment",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

