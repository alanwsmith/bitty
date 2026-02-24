

signal_697D1(_, el) {
  const result = this.loadFragment("el_697D1");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_697D1");
}

given_signal_697D1(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_697D1");
  this.createFragment("el_697D1", `<div>ok</div>`);
  delete this._fragment["el_697D1"];
  this.trigger("signal_697D1");
}