window.$CLASS_NAME = class {
  bittyReady() {
    this.api.send({ status: "ok" }, "$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    el.innerHTML = ev.payload.status;
  }
};
