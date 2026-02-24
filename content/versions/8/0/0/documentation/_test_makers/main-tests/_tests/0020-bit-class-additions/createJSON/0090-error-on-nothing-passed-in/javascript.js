#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.createJSON(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}