window.Class_9a1e8 = class {
  #storageKey = "storage_9a1e8";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "PASSED" },
    );
    this.api.trigger("signal_9a1e8");
  }

  signal_9a1e8(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "FAILED" },
    );
    el.innerHTML = data.status;
  }
};
