window.$CLASS_NAME = class {
  #storageKey = "$STORAGE_KEY";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "PASSED" },
    );
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "FAILED" },
    );
    el.innerHTML = data.status;
  }
};
