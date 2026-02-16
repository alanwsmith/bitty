window.Class8E9F6 = class {
  bittyReady() {
    this.api.trigger("signal_8E9F6");
  }

  async signal_8E9F6(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-8E9F6.txt` is part of the test suite. It is an expected error.",
    );
    const key = "key-8E9F6";
    const url = "/intentionally-missing-file-8E9F6.txt";
    this.api.setOutputLogLevel("none");
    const response = await this.api.fetchTEXT(key, url);
    if (response.ok === false && response.error.payload.status === 404) {
      el.innerHTML = "ok";
    }
    this.api.trigger("logcheck8E9F6");
  }
};
