window.ClassCCFCE = class {
  bittyReady() {
    this.api.trigger("signal_CCFCE");
  }

  signal_CCFCE(ev, el) {
    const key = "id-CCFCE";
    const content = "content-CCFCE";
    this.api.makeTEXT(key, content);
    if (this.api.text(key) === content) {
      el.innerHTML = "ok";
    }
  }
};
