window.ClassC23DC = class {
  bittyReady() {
    const testSender = document.querySelector(".el-C23DC").click();
  }

  signal_C23DC(_, el) {
    // set to `bug` here since this
    // signal should not fire.
    el.innerHTML = "bug";
  }
};
