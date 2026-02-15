window.ClassC9CCB = class {
  bittyReady() {
    this.api.trigger("signal_C9CCB");
  }

  signal_C9CCB(_, el) {
    const data = this.api.getStorageOr(
      "some-key-that-does-not-exist",
      { status: "ok" },
    );
    el.innerHTML = data.status;
  }
};
