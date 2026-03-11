signal_2B80D(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const invalidJSON = "this is not valid JSON";
  const result = this.createJSON("el_2B80D", invalidJSON);
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}

