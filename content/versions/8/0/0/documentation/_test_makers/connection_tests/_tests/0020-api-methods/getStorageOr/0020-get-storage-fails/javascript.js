window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const data = this.api.getStorageOr(
      "some-key-that-does-not-exist",
      { status: "PASSED" },
    );
    el.innerHTML = data.status;
  }
};
