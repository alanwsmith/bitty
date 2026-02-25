$SIGNAL_NAME(_, el) {
  this.deleteElement("el_$HASH");
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>ok</div>`);
  const result = this.loadElement("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}