window.ClassF96C6 = class {
  bittyReady() {
    this.api.trigger("signal_F96C6");
  }

  async signal_F96C6(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-F96C6.txt` is part of the test suite. It is an expected error.",
    );
    const url = "/intentionally-missing-file-F96C6.txt";
    this.api.setOutputLogLevel("none");
    const response = await this.api.getTEXT(url);
    if (response.error.status === 404) {
      el.innerHTML = "ok";
    }
  }
};
