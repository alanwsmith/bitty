async bittyReady() {
  await this.sleep(100);
  this.qs("[data-send=signal_C23DC]").click();
}

