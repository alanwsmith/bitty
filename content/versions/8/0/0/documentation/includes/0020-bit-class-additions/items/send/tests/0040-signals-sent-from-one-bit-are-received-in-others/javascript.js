window.ClassF8EF8 = class {
  async bittyReady() {
    // delay to let other bit initialize
    await this.sleep(100);
    this.send({ status: "ok" }, "signal_F8EF8_2");
  }
};

window.ClassF8EF8_2 = class {
  signal_F8EF8_2(payload, el) {
    el.innerHTML = payload.status;
  }
};
