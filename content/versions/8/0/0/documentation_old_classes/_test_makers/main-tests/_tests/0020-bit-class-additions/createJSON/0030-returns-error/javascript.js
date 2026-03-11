$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const invalidJSON = "this is not valid JSON";
  const result = this.createJSON("el_$HASH", invalidJSON);
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}

