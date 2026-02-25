signal_697D1(_, el) {
  const result = this.loadFragment("el_697D1");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}
