window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (typeof this.api.svg("$ID_NAME") === "object") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_$SIGNAL_NAME");
  }

  display_$SIGNAL_NAME(_, el) {
    el.replaceChildren(this.api.svg("$ID_NAME"));
  }
};
