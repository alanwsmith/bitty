window.$CLASS_NAME = class {
  #time1 = performance.now();

  bittyReady() {
    document.querySelector("#$CLICK_CLASS").click();
  }

  async $SIGNAL_NAME(_, el) {
    console.log("here1");
    await this.sleep(50);
    console.log("here2");
  }

  $SIGNAL2_NAME(_, el) {
    console.log("here3");
    const time2 = performance.now();
    if ((time2 - this.#time1) > 45) {
      el.innerHTML = "ok";
    }
  }
};
