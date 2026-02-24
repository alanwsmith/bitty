#key = "json_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const jsonString = `{}`;
  // const result = this.createJSON("el_$HASH", jsonString);
  // if (result.ok === true) {
  //   el.innerHTML = "ok";
//  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
