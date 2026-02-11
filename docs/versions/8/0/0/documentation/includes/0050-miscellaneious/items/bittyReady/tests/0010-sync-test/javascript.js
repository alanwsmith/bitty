window.Class86B74 = class {
  bittyReady() {
    this.api.trigger("signal_86B74");
  }

  signal_86B74(_, el) {
    el.innerHTML = "PASSED";
  }
};
