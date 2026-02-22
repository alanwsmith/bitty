async bittyReady() {
  await this.sleep(100);
  document.querySelector("[data-send~=signal_ABF58]").click();
}

