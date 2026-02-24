

signal_CA48A(_, el) {
  const result = this.updateFragment("el_CA48A", `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_CA48A");
}

given_signal_CA48A(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_CA48A", `<div></div>`);
  this.trigger("signal_CA48A");
}