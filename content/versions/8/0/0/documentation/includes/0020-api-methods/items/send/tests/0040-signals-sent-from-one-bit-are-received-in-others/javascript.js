window.Class31A28 = class {
  async bittyReady() {
    // delay to let other bit initialize
    await this.api.sleep(100);
    this.api.send({ status: "ok" }, "signal_31A28_2");
  }
};

window.Class31A28_2 = class {
  signal_31A28_2(ev, el) {
    el.innerHTML = ev.payload.status;
  }
};
