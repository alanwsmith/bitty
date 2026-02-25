async bittyReady() {
  this.sleep(100);
  this.setGlobalLogLevel("none");
  this.deleteFragment("el_D027C");
  this.loadFragment("el_D027C", `<div class="test">test passed</div>`);
  delete this._fragment["el_D027C"];
  this.qs("[data-send~=signal_D027C]").click();
}
