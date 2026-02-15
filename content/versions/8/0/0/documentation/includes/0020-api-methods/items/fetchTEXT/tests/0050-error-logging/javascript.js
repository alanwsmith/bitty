window.ClassF0EEE = class {
  bittyReady() {
    this.api.trigger("signal_F0EEE");
  }

  // async signal_F0EEE(ev, el) {
  //   console.error(
  //     "The 404 error for `/intentionally-missing-file-F0EEE.txt` is part of the test suite. It is an expected error.",
  //   );
  //   const url = "/intentionally-missing-file-F0EEE.txt";
  //   this.api.setOutputLogLevel("none");
  //   const response = await this.api.getTEXT(url);
  //   if (this.api.logs()[0].payload.status === 404) {
  //     el.innerHTML = "ok";
  //   }
  // }
};
