async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.createFragment("el_$HASH", `<div class="test">test passed</div>`);
  delete this._fragment["el_$HASH"];
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
