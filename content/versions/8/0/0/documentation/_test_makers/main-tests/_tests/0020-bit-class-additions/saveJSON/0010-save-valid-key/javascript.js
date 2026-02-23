#key = "json_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  // this.createJSON(this.#key, { status: "bug" });
  // this.json[this.#key].status = "ok";
  // this.saveJSON(this.#key);
  // delete this.json[this.#key];
  // this.loadJSON(this.#key);
  // el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}
