#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsObject = { method_$HASH: () => {} };
  // this.createJSON(this.#key, jsObject);
  // if (this.json[this.#key].method_$HASH === undefined) {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
