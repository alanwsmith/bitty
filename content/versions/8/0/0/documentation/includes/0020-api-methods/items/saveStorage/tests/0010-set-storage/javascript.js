window.Class20D40 = class {
  #storageKey = "key-20D40";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "ok" },
    );
    this.api.trigger("signal_20D40");
  }

  signal_20D40(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "bug" },
    );
    el.innerHTML = data.status;
  }
};
