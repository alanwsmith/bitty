window.Class0EACD = class {
  bittyReady() {
    this.api.trigger("signal_0EACD");
  }

  signal_0EACD(ev, el) {
    el.innerHTML = this.api.data("id-0EACD").status;
  }
};
