#key = "json_signal_AF434";

test_signal_AF434(_, el) {
  this.createJSON(this.#key, { status: "bug" });
  this.json[this.#key].status = "ok";
  this.saveJSON(this.#key);
  const result = this.saveJSON(this.#key);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_signal_AF434");
}