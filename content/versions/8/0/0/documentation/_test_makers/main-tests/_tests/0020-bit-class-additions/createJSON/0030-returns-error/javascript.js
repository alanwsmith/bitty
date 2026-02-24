#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const invalidJSON = "this is not valid JSON";
  // const result = this.createJSON(this.#key, invalidJSON);
  // if (result.ok === false) {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("$SIGNAL_NAME");
}
