window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger(
      `$SIGNAL_NAME $SIGNAL2_NAME`,
    );
  }

  $SIGNAL2_NAME(_, el) {
    el.innerHTML = "PASSED";
  }
};
