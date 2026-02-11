window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger(
      `$SIGNAL_NAME $SIGNAL2_NAME $SIGNAL3_NAME`,
    );
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "PASSED";
  }

  $SIGNAL2_NAME(_, el) {
    el.innerHTML = "PASSED";
  }

  $SIGNAL3_NAME(_, el) {
    el.innerHTML = "PASSED";
  }
};
