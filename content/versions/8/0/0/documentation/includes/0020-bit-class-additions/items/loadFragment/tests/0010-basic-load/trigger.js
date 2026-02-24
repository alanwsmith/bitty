async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.createFragment("el_5D60F", `<div class="test">test passed</div>`);
  delete this._fragment["el_5D60F"];
  this.qs("[data-send~=signal_5D60F]").click();
}
