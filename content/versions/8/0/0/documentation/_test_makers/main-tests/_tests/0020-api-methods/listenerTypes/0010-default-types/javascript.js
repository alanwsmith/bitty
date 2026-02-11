window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (
      this.api.listenerTypes().includes("click") &&
      this.api.listenerTypes().includes("input")
    ) {
      el.innerHTML = "ok";
    }
  }
};
