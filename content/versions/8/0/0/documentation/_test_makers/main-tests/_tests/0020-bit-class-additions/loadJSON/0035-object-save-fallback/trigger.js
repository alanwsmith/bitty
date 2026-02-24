async bittyReady() {
  this.sleep(100);
  localStorage.removeItem("data_$SIGNAL_NAME");
  this.qs("[data-send~=$SIGNAL_NAME]").click();
}
