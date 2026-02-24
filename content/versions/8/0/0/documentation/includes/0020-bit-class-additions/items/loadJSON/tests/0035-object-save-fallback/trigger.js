async bittyReady() {
  this.sleep(100);
  localStorage.removeItem("data_signal_A3FE1");
  this.qs("[data-send~=signal_A3FE1]").click();
}
