window.Class8A1DD = class {
  bittyReady() {
    this.api.trigger("run_signal_8A1DD");
  }

  run_signal_8A1DD(_, __) {
    const styles = `:root { --el-8A1DD: crimson; }`;
    this.api.addStyles(styles);
    this.api.trigger("verify_signal_8A1DD");
  }

  verify_signal_8A1DD(_, el) {
    const result = document
      .documentElement
      .style
      .getPropertyValue("--el-8A1DD");
    if (result === "crimson") {
      el.innerHTML = "ok";
    }
  }
};
