window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    el.innerHTML = this.api.json("$ID_NAME").status;
  }
};
