window.$CLASS_NAME = class {
  #storageKey = "$STORAGE_KEY";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "ok" },
    );
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "bug" },
    );
    el.innerHTML = data.status;
  }
};
