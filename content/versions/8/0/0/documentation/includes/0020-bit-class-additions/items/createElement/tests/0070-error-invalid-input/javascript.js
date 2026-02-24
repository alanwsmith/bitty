signal_C244B(_, el) {
  const result = this.createElement("el_C244B", { misc: "not a valid input" });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
