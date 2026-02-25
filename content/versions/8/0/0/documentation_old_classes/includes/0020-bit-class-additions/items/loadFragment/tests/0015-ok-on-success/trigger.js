async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteFragment("el_697D1");
  this.createFragment("el_697D1", `<div>test passed</div>`);
  delete this._fragment["el_697D1"];
  this.qs("[data-send~=signal_697D1]").click();
}