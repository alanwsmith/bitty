#key = "json_signal_6A436";

test_signal_6A436(_, el) {
  const jsonObject = JSON.parse(`{ "status": "ok" }`);
  this.createJSON(this.#key, jsonObject);
  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("test_signal_6A436");
}