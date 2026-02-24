#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsObject = { "status": "ok" };
  // this.createJSON(this.#key, jsObject);
  // el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
