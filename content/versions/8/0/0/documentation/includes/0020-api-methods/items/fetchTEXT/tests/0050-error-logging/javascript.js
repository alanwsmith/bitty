window.Class6D83C = class {
  bittyReady() {
    this.api.trigger("signal_6D83C");
  }

  async signal_6D83C(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-6D83C.txt` is part of the test suite. It is an expected error.",
    );
    const key = "key-6D83C";
    const url = "/intentionally-missing-file-6D83C.txt";
    this.api.setOutputLogLevel("none");
    await this.api.fetchTEXT(key, url);
    if (this.api.logs()[0].payload.type === "fetchError") {
      el.innerHTML = "ok";
    }
  }
};
