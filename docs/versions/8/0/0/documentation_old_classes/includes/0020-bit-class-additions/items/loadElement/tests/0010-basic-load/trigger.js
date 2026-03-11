async bittyReady() {
  this.sleep(100);
  this.setLocalLogLevel("none");
  this.setGlobalLogLevel("none");
  this.deleteElement("el_23191");
  this.createElement("el_23191", `<div class="test">test passed</div>`);
  delete this._element["el_23191"];
  this.qs("[data-send~=signal_23191]").click();
}
