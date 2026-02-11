window.Class475EF = class {
  #storageKey = "key-475EF";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "PASSED" },
    );
    this.api.trigger("signal_475EF");
  }

  signal_475EF(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "FAILED" },
    );
    el.innerHTML = data.status;
  }
};
