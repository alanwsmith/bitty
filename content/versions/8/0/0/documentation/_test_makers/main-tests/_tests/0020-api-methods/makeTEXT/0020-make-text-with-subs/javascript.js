window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "REPLACE_ALFA REPLACE_BRAVO REPLACE_ALFA";
    const subs = [];
    el.innerHTML = "xxx";
  }
};
