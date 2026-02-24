#key = "json_signal_69E87";

signal_69E87(_, el) {
  this.deleteJSON(this.#key);
  if (this.json[this.#key] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON(this.#key, `{}`);
  this.trigger("signal_69E87");
}