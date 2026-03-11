window.ClassD6759 = class {
  bittyReady() {
    this.api.trigger("signal_D6759");
  }

  signal_D6759(ev, el) {
    el.innerHTML = this.api.template("id-D6759");
  }
};
