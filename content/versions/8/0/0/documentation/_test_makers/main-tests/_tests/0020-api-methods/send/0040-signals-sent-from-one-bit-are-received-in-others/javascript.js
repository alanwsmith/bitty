window.$CLASS_NAME = class {
  async bittyReady() {
    // delay to let other bit initialize
    await this.api.sleep(100);
    this.api.send({ status: "ok" }, "$SIGNAL2_NAME");
  }
};

window.$CLASS2_NAME = class {
  $SIGNAL2_NAME(payload, el) {
    el.innerHTML = payload.status;
    el.innerHTML = "xxx";
  }
};
