#key = "json_signal_CE7A8";

test_signal_CE7A8(_, el) {
  this.deleteJSON(this.#key);
  const result = this.loadJSON(this.#key);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createJSON(this.#key, `{}`);
  this.trigger("test_signal_CE7A8");
}