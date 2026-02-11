window.ClassECC83 = class {
  bittyReady() {
    this.api.trigger("signal_ECC83");
  }

  signal_ECC83(ev, el) {
    el.innerHTML = this.api.template("id-ECC83");
  }
};
