#key = "json_signal_2B80D";

signal_2B80D(_, el) {
  // const invalidJSON = "this is not valid JSON";
  // const result = this.createJSON("el_2B80D", invalidJSON);
  // if (result.ok === false) {
  //   el.innerHTML = "test passed";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.trigger("signal_2B80D");
}
