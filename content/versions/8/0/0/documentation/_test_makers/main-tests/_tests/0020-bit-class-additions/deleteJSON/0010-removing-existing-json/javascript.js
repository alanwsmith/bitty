#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.deleteJSON(this.#key);
  if (this.json[this.#key] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createJSON(this.#key, `{}`);
  this.trigger("$SIGNAL_NAME");
}