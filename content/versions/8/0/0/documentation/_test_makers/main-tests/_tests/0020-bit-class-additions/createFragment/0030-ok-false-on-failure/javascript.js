$SIGNAL_NAME(_, el) {
  const result = this.createFragment("el_$HASH", {
    key: "not a string, element, or document fragment",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

