window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-$HASH.txt` is part of the test suite. It is an expected error.",
    );
    const key = "key-$HASH";
    const url = "/intentionally-missing-file-$HASH.txt";
    this.api.setOutputLogLevel("none");
    const response = await this.api.fetchTEXT(key, url);
    if (response.ok === false && response.error.payload.status === 404) {
      el.innerHTML = "ok";
    }
    this.api.trigger("logcheck$HASH");
  }

  logcheck$HASH(_, el) {
    if (this.api.logs()[0].payload.type === "fetchError") {
      el.innerHTML = "ok";
    }
  }
};
