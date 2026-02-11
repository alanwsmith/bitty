window.Class9A1E8 = class {
  #storageKey = "key-9A1E8";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "ok" },
    );
    this.api.trigger("signal_9A1E8");
  }

  signal_9A1E8(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "bug" },
    );
    el.innerHTML = data.status;
  }
};
