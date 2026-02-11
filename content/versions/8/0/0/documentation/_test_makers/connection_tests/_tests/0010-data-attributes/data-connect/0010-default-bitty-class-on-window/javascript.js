window.BittyClass = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = "PASSED";
  }
};
