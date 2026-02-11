window.ClassCBE64 = class {
  bittyReady() {
    this.api.trigger(
      `signal_CBE64 signal_CBE64_2`,
    );
  }

  signal_CBE64(_, el) {
    el.innerHTML = "UPDATED";
  }

  signal_CBE64_2(_, el) {
    el.innerHTML = "ok";
  }
};
