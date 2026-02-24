#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteElement("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}