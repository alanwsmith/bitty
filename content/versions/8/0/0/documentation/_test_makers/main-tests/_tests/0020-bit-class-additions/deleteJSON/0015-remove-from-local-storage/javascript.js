#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.deleteJSON(this.#key);
  const result = this.loadJSON(this.#key);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON(this.#key, `{}`);
  this.trigger("$SIGNAL_NAME");
}