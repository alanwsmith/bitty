window.$CLASS_NAME = class {
  async bittyReady() {
    // delay to let other bit initialize
    await this.api.sleep(100);
    this.api.trigger("$SIGNAL2_NAME");
  }
};

window.$CLASS2_NAME = class {
  $SIGNAL2_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
