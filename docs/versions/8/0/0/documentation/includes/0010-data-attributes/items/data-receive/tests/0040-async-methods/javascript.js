window.ClassF9422 = class {
  bittyReady() {
    document.querySelector("[data-send=signal_F9422]").click();
  }

  async signal_F9422(_, el) {
    const t1 = performance.now();
    await this.sleep(100);
    const t2 = performance.now();
    const delta = t2 - t1;
    if (delta > 80) {
      el.innerHTML = "ok";
    }
  }
};
