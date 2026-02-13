window.ClassB68D3 = class {
  bittyReady() {
    this.api.trigger("signal_B68D3");
  }

  signal_B68D3(ev, el) {
    if (
      ev.type === "bittyapitrigger" &&
      ev.target.dataset.send === "signal_B68D3"
    ) {
      el.innerHTML = "ok";
    }
  }
};
