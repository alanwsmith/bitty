window.$CLASS_NAME = class {
  bittyReady() {
    document.querySelector("[data-send=$SIGNAL_NAME]").click();
  }

  async $SIGNAL_NAME(_, el) {
    const t1 = performance.now();
    await this.sleep(100);
    const t2 = performance.now();
    const delta = t2 - t1;
    if (delta > 80) {
      el.innerHTML = "ok";
    }
  }
};
