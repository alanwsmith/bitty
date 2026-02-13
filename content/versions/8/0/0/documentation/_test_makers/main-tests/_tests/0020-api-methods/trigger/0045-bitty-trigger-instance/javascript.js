window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    if (
      ev.type === "bittyapitrigger" &&
      ev.target.dataset.send === "$SIGNAL_NAME"
    ) {
      el.innerHTML = "ok";
    }
  }
};
