async bittyReady() {
  this.sleep(100);
  this.setLocalLogLevel("none");
  this.setGlobalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.createElement("el_$HASH", `<div>ok</div>`);
  delete this._element["el_$HASH"];
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
