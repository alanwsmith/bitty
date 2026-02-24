#key = "json_signal_97846";

signal_97846(_, el) {
  const result = this.deleteJSON(this.#key);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.createJSON(this.#key, `{}`);
  this.trigger("signal_97846");
}