#key = "json_signal_CE7A8";

signal_CE7A8(_, el) {
  this.deleteJSON(this.#key);
  const result = this.loadJSON(this.#key);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON(this.#key, `{}`);
  this.trigger("signal_CE7A8");
}