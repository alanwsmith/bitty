window.ClassA3C8F = class {
  bittyReady() {
    this.api.trigger("signal_A3C8F");
  }

  signal_A3C8F(ev, el) {
    if (
      ev.type === "bittyapitrigger" &&
      ev.target.dataset.send === "signal_A3C8F"
    ) {
      el.innerHTML = "ok";
    }
  }
};
