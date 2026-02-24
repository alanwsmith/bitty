async bittyReady() {
  this.sleep(100);
  this.setLocalLogLevel("none");
  this.deleteSVG("el_A9C93");
  this.qs("[data-send~=signal_A9C93]").click();
}