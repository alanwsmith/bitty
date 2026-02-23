#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  // this.loadJSON(this.#key);
  // el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteJSON(this.#key);
  this.createJSON(this.#key, { status: "ok" });
  // delete this.json[this.#key];
  // this.trigger("test_$SIGNAL_NAME");
}
