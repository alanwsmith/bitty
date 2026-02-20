window.Class7C304 = class {
  #time1 = performance.now();

  bittyReady() {
    document.querySelector("#el-7C304").click();
  }

  async signal_7C304(_, el) {
    await this.sleep(50);
  }

  signal_7C304_2(_, el) {
    const time2 = performance.now();
    if ((time2 - this.#time1) > 45) {
      el.innerHTML = "ok";
    }
  }
};
