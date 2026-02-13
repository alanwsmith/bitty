window.Class1ECA9 = class {
  bittyReady() {
    this.api.trigger("signal_1ECA9");
  }

  signal_1ECA9(ev, el) {
    el.innerHTML = this.api.svg("id-1ECA9");
  }
};
