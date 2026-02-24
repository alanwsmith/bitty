

signal_FAB09(_, el) {
  const result = this.updateFragment(this.#key, `<div>x</div><div>ok</div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_FAB09");
}

given_signal_FAB09(_, __) {
  this.trigger("signal_FAB09");
}