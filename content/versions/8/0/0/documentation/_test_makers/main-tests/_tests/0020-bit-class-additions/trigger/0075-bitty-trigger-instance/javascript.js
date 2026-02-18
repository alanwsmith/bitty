window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    if (
      ev.type === "bittytriggerevent" &&
      ev.target.dataset.send === "$SIGNAL_NAME"
    ) {
      el.innerHTML = "ok";
    }
  }
};
