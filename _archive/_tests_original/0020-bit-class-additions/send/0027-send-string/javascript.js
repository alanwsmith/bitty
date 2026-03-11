window.$CLASS_NAME = class {
  bittyReady() {
    this.send("ok", "$SIGNAL_NAME");
  }

  $SIGNAL_NAME(payload, el) {
    el.innerHTML = payload;
  }
};
