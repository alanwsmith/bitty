window.Class79A51 = class {
  bittyReady() {
    this.api.trigger("signal_79A51");
  }

  signal_79A51(ev, el) {
    if (
      ev.type === "bittyapitrigger" &&
      ev.target.dataset.send === "signal_79A51"
    ) {
      el.innerHTML = "ok";
    }
  }
};
