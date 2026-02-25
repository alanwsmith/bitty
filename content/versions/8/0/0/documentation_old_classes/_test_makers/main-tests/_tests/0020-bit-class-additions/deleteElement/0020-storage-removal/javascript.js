

$SIGNAL_NAME(_, el) {
  this.deleteElement("el_$HASH");
  const result = this.loadElement("el_$HASH");
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}