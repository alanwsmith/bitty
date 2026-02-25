signal_F8382(_, el) {
  const result = this.loadFragment("el_F8382");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}
