window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-$HASH.txt` is part of the test suite. It is an expected error.",
    );
    const url = "/intentionally-missing-file-$HASH.txt";
    this.api.setOutputLogLevel("none");
    const response = await this.api.getTEXT(url);
    if (response.error.status === 404) {
      el.innerHTML = "ok";
    }
  }
};
