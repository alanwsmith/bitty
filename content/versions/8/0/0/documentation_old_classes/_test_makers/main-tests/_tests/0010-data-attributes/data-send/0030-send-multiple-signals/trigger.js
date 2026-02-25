async bittyReady() {
  await this.sleep(100);
  document.querySelector("[data-send~=$SIGNAL_NAME]").click();
}


