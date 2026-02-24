#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteElement("el_$HASH");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}