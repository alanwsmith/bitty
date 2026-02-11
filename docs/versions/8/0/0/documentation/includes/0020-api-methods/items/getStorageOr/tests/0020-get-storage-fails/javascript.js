window.Class_cbcda = class {
  bittyReady() {
    this.api.trigger("signal_cbcda");
  }

  signal_cbcda(_, el) {
    const data = this.api.getStorageOr(
      "some-key-that-does-not-exist",
      { status: "PASSED" },
    );
    el.innerHTML = data.status;
  }
};
