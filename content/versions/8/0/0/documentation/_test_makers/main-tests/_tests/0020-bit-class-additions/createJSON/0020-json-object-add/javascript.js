#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsonObject = JSON.parse(`{ "status": "ok" }`);
  // this.createJSON(this.#key, jsonObject);
  // el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
