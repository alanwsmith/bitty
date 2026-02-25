$SIGNAL_NAME(_, el) {
  const result = this.createFragment("el_$HASH", `<div>x</div><div>ok</div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}


