window.$CLASS_NAME = class {
  bittyReady() {
    this.send({}, "$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
