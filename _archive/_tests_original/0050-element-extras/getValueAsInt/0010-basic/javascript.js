window.$CLASS_NAME = class {
  bittyReady() {
    document
      .querySelector("[data-receive=$SIGNAL_NAME]")
      .value = 9000;
    this.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (el.getValueAsInt() === 9000) {
      this.trigger("verify_$SIGNAL_NAME");
    }
  }

  verify_$SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};
