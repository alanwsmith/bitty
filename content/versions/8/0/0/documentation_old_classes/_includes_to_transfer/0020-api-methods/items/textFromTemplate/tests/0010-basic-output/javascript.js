window.ClassE1190 = class {
  bittyReady() {
    this.api.trigger("signal_E1190");
  }

  signal_E1190(ev, el) {
    const expected = "example-E1190";
    const got = this.api.textFromTemplate("id-E1190");
    if (expected === got) {
      el.innerHTML = "ok";
    }
  }
};
