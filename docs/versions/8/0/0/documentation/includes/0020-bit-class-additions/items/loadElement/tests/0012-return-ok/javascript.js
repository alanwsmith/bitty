signal_BB0D2(_, el) {
  const result = this.loadElement("el_BB0D2");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}

