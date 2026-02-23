class DataConnectSingleClassExample {
  signal_15881(_, el) {
    el.innerHTML = "test passed";
  }

  async bittyReady() {
    await this.sleep(100);
    this.qs("[data-send~=signal_15881]").click();
  }
}

export { DataConnectSingleClassExample };
