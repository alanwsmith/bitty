#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsonString = `{}`;
  // const result = this.createJSON(this.#key, jsonString);
  // if (result.ok === true) {
  //   el.innerHTML = "ok";
//  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
