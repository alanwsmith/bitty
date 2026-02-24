$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", `<div></div>`);
  const result = this.createFragment("el_$HASH", `<div></div>`);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}

