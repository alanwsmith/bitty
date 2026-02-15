window.Class68BED = class {
  bittyReady() {
    this.api.trigger("signal_68BED");
  }

  async signal_68BED(ev, el) {
    console.error(
      "The 404 error for `/intentionally-missing-file-68BED.txt` is part of the test suite. It is an expected error.",
    );
    const key = "key-68BED";
    const url = "/intentionally-missing-file-68BED.txt";
    this.api.setOutputLogLevel("none");
    const response = await this.api.fetchTEXT(key, url);
    if (response.ok === false && response.error.payload.status === 404) {
      el.innerHTML = "ok";
    }
    this.api.trigger("logcheck68BED");
  }

  logcheck68BED(_, el) {
    if (this.api.logs()[0].payload.type === "fetchError") {
      el.innerHTML = "ok";
    }
  }
};
