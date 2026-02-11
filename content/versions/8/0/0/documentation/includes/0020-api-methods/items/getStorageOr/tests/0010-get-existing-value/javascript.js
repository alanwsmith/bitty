window.Class_475ef = class {
  #storageKey = "storage_475ef";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "PASSED" },
    );
    this.api.trigger("signal_475ef");
  }

  signal_475ef(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "FAILED" },
    );
    el.innerHTML = data.status;
  }
};
