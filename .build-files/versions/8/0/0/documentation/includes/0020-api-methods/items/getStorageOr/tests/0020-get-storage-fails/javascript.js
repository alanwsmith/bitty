window.ClassCBCDA = class {
  bittyReady() {
    this.api.trigger("signal_CBCDA");
  }

  signal_CBCDA(_, el) {
    const data = this.api.getStorageOr(
      "some-key-that-does-not-exist",
      { status: "ok" },
    );
    el.innerHTML = data.status;
  }
};
