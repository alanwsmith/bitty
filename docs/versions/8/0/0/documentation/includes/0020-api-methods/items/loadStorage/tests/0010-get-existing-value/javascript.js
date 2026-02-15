window.ClassB0631 = class {
  #storageKey = "key-B0631";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "ok" },
    );
    this.api.trigger("signal_B0631");
  }

  signal_B0631(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "bug" },
    );
    el.innerHTML = data.status;
  }
};
