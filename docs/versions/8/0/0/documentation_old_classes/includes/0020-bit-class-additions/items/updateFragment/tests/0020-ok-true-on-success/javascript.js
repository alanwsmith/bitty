

signal_FAB09(_, el) {
  const result = this.updateFragment("el_FAB09", `<div>x</div><div>ok</div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_FAB09");
}

given_signal_FAB09(_, __) {
  this.trigger("signal_FAB09");
}