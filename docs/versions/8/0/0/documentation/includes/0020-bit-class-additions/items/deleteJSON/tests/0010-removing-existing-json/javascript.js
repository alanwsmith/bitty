#key = "json_signal_69E87";

signal_69E87(_, el) {
  this.deleteJSON("el_69E87");
  if (this.json["el_69E87"] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON("el_69E87", `{}`);
  this.trigger("signal_69E87");
}