window.Class916F1 = class {
  bittyReady() {
    this.api.trigger("signal_916F1");
  }

  signal_916F1(_, el) {
    this.api.setCollectionLogLevel("trace");
    if (this.api.collectionLogLevel() === "trace") {
      el.innerHTML = "ok";
    }
  }
};
