window.$CLASS_NAME = class {
  bittyReady() {
    this.api.send({ status: "ok" }, "$SIGNAL_NAME");
  }

  $SIGNAL_NAME(payload, el) {
    el.innerHTML = payload.status;
  }
};
