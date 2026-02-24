#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsObject = { method_$HASH: () => {} };
  // this.createJSON("el_$HASH", jsObject);
  // if (this.json["el_$HASH"].method_$HASH === undefined) {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
