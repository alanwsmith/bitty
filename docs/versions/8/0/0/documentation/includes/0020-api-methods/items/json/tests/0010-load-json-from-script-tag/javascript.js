window.Class85471 = class {
  bittyReady() {
    this.api.trigger("signal_85471");
  }

  signal_85471(ev, el) {
    el.innerHTML = this.api.json("id-85471").status;
  }
};
