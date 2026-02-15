window.Class68BED = class {
  bittyReady() {
    this.api.trigger("signal_68BED");
  }

  // async signal_68BED(ev, el) {
  //   console.error(
  //     "The 404 error for `/intentionally-missing-file-68BED.txt` is part of the test suite. It is an expected error.",
  //   );
  //   const url = "/intentionally-missing-file-68BED.txt";
  //   this.api.setOutputLogLevel("none");
  //   const response = await this.api.getTEXT(url);
  //   if (response.error.status === 404) {
  //     el.innerHTML = "ok";
  //   }
  // }
};
