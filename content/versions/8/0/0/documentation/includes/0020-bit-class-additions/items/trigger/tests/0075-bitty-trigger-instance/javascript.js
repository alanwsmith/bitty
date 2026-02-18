window.Class4DD8E = class {
  bittyReady() {
    this.trigger("signal_4DD8E");
  }

  signal_4DD8E(ev, el) {
    if (
      ev.type === "bittytriggerevent" &&
      ev.target.dataset.send === "signal_4DD8E"
    ) {
      el.innerHTML = "ok";
    }
  }
};
