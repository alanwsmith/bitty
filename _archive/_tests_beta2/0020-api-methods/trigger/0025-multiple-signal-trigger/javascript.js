window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger(
      `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
    );
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }

  $SIGNAL2_NAME(_, el) {
    el.innerHTML = "ok";
  }

  $SIGNAL3_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
