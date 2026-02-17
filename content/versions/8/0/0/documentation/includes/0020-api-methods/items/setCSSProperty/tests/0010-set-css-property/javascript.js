window.ClassCC556 = class {
  bittyReady() {
    this.api.trigger("run_signal_CC556 verify_signal_CC556");
  }

  run_signal_CC556(_, el) {
    this.api.setCSSProperty("--el-CC556", "crimson");
  }

  verify_signal_CC556(_, el) {
    const gotValue = document
      .documentElement
      .style
      .getPropertyValue("--el-CC556");
    if (gotValue === "crimson") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO: Move to using bit class directly"
  }
};
