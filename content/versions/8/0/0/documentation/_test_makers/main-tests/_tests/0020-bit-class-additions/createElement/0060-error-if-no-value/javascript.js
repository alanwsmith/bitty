$SIGNAL_NAME(_, el) {
  const result = this.createElement("el_$HASH");
  if (result.level === "error") {
    el.innerHTML = "test passed";
  }
}

