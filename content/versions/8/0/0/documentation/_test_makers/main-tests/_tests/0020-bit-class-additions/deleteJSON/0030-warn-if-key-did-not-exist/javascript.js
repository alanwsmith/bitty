#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.deleteJSON(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}