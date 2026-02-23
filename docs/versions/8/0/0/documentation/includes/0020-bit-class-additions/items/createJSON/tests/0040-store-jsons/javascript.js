#key = "json_signal_41D2B";

test_signal_41D2B(_, el) {
  // this.loadJSON(this.#key);
  // el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteJSON(this.#key);
  this.createJSON(this.#key, { status: "ok" });
  delete this.json[this.#key];
  this.trigger("test_signal_41D2B");
}
