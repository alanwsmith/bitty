window.ClassA97CA = class {
  bittyReady() {
    this.api.trigger("signal_A97CA");
  }

  signal_A97CA(_, el) {
    this.api.setCollectionLogLevel("trace");
    if (this.api.collectionLogLevel() === "trace") {
      el.innerHTML = "ok";
    } else {
      console.log(
        this.api.collectionLogLevel(),
      );
    }
  }
};
