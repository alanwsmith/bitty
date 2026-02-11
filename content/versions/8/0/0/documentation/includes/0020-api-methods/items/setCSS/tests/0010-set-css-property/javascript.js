window.ClassA3EFC = class {
  bittyReady() {
    this.api.setCSS("--el-A3EFC", "crimson");
    this.api.trigger("signal_A3EFC");
  }

  signal_A3EFC(_, el) {
    const gotValue = document.documentElement.style.getPropertyValue(
      "--el-A3EFC",
    );
    if (gotValue === "crimson") {
      el.innerHTML = "ok";
    }
  }
};
