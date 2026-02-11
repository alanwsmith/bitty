window.ClassCBCDA = class {
  bittyReady() {
    this.api.trigger("signal_CBCDA");
  }

  signal_CBCDA(_, el) {
    const data = this.api.getStorageOr(
      "some-key-that-does-not-exist",
      { status: "PASSED" },
    );
    el.innerHTML = data.status;
  }
};
