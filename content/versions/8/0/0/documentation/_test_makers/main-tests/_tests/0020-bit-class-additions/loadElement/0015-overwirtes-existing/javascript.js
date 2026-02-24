#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.loadElement("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.deleteElement("el_$HASH");
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}