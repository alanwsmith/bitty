window.ClassCC556 = class {
  bittyReady() {
    console.log("here1");
    this.api.trigger(`set_signal_CC556`);
  }

  set_signal_CC556(_, el) {
    console.log("here2");
    this.api.setCSSProperty("--el-CC556", "crimson");
    this.api.trigger("verify_signal_CC556");
  }

  verify_signal_CC556(_, el) {
    const gotValue = document
      .documentElement
      .style
      .getPropertyValue("--el-CC556");

    if (gotValue === "crimson") {
      el.innerHTML = "ok";
    }
  }
};
