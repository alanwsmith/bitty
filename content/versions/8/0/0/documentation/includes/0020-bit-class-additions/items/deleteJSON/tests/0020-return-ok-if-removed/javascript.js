#key = "json_signal_97846";

signal_97846(_, el) {
  const result = this.deleteJSON("el_97846");
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.createJSON("el_97846", `{}`);
  this.trigger("signal_97846");
}