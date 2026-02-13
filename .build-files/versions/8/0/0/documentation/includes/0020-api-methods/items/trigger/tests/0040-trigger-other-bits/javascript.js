window.Class38367 = class {
  async bittyReady() {
    // delay to let other bit initialize
    await this.api.sleep(100);
    this.api.trigger("signal_38367_2");
  }
};

window.Class38367_2 = class {
  signal_38367_2(_, el) {
    el.innerHTML = "ok";
  }
};
