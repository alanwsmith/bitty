window.ClassE7E76 = class {
  bittyReady() {
    const testSender = document.querySelector(".el-E7E76").click();
  }

  signal_E7E76(_, el) {
    // set to `bug` here since this
    // signal should not fire.
    el.innerHTML = "bug";
  }
};
