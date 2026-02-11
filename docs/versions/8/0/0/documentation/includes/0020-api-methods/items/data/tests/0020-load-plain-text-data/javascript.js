window.ClassA0EB3 = class {
  bittyReady() {
    this.api.trigger("signal_A0EB3");
  }

  signal_A0EB3(ev, el) {
    el.innerHTML = this.api.data("id-A0EB3");
  }
};
