async bittyReady() {
  this.setLocalLogLevel("none");
  this.sleep(100);
  this.setGlobalLogLevel("none");
  localStorage.removeItem("missing_key_signal_194AD");
  this.qs("[data-send~=signal_194AD]").click();
}
