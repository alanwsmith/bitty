bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div>ok</div>`);
  this.trigger("$SIGNAL_NAME");
}

