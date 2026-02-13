window.ClassB3B6A = class {
  bittyReady() {
    this.api.trigger("signal_B3B6A");
  }

  async signal_B3B6A(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-B3B6A.txt` is part of the test suite. It is an expected error.",
    );
    const url = "/intentionally-missing-file-B3B6A.txt";
    this.api.setOutputLogLevel("none");
    const response = await this.api.getTEXT(url);
    if (this.api.logs()[0].payload.status === 404) {
      el.innerHTML = "ok";
    }
  }
};
