$SIGNAL_NAME(_, el) {
  const result = this.createElement("el_$HASH", { misc: "not a valid input" });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
