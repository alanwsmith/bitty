#key = "json_signal_390C9";

test_signal_390C9(_, el) {
  const jsonString = `{ "status": "ok" }`;
  this.createJSON(this.#key, jsonString);
  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("test_signal_390C9");
}