window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    this.api.setCollectionLogLevel("trace");
    if (this.api.collectionLogLevel() === "trace") {
      el.innerHTML = "ok";
    }
el.innerHTML = "TODO: Move to using bit class directly"
  }
};
