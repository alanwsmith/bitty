#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.createJSON(this.#key, { status: "bug" });
  this.json[this.#key].status = "ok";
  this.saveJSON(this.#key);
  const result = this.saveJSON(this.#key);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}