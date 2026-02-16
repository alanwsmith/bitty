window.Class73693 = class {
  bittyReady() {
    this.api.addJSON("key-73693", { status: "ok" });
    this.api.trigger("signal_73693");
  }

  signal_73693(_, el) {
    if (this.api.saveJSON("key-73693").ok === true) {
      const data = JSON.parse(localStorage.getItem("key-73693")).data;
      el.innerHTML = data.status;
    }
  }

  /*
  #storageKey = "key-73693";

  bittyReady() {
    this.api.setStorage(
      this.#storageKey,
      { status: "ok" },
    );
    this.api.trigger("signal_73693");
  }

  signal_73693(_, el) {
    const data = this.api.getStorageOr(
      this.#storageKey,
      { status: "bug" },
    );
    el.innerHTML = data.status;
  }
  */
};
