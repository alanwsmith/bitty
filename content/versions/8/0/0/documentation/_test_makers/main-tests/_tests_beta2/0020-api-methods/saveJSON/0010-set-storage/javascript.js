window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addJSON("$STORAGE_KEY", { status: "ok" });
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (this.api.saveJSON("$STORAGE_KEY").ok === true) {
      const data = JSON.parse(localStorage.getItem("$STORAGE_KEY")).data;
      el.innerHTML = data.status;
    }
  }

  /*
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
  */
};
