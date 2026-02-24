#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteJSON(this.#key);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.createJSON(this.#key, `{}`);
  this.trigger("$SIGNAL_NAME");
}