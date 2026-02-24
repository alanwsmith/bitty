$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createJSON("el_$HASH");
  console.log(result);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

