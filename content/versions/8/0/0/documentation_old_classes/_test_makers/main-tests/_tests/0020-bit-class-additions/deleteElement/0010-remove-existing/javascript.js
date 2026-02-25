

$SIGNAL_NAME(_, el) {
  this.deleteElement("el_$HASH");
  if (this.renderElement("el_$HASH") === undefined) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}