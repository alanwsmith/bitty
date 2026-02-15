window.$CLASS_NAME = class {
  async bittyReady() {
    // delay to let other bit initialize
    await this.api.sleep(100);
    this.api.send({ status: "ok" }, "$SIGNAL2_NAME");
  }
};

window.$CLASS2_NAME = class {
  $SIGNAL2_NAME(ev, el) {
    el.innerHTML = ev.payload.status;
  }
};
