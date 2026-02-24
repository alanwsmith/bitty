signal_D2EBD(_, el) {
  const result = this.createFragment("el_D2EBD", `<div>x</div><div>ok</div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}


