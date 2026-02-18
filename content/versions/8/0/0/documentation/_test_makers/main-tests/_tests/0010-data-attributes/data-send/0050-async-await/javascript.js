window.$CLASS_NAME = class {
  #time1 = performance.now();

  bittyReady() {
    document.querySelector("#$CLICK_CLASS").click();
  }

  async $SIGNAL_NAME(_, el) {
    await this.sleep(50);
  }

  $SIGNAL2_NAME(_, el) {
    const time2 = performance.now();
    if ((time2 - this.#time1) > 45) {
      el.innerHTML = "ok";
    }
  }
};
