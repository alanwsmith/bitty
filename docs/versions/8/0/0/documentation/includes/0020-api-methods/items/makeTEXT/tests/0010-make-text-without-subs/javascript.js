window.ClassCCFCE = class {
  bittyReady() {
    this.api.trigger("signal_CCFCE");
  }

  signal_CCFCE(ev, el) {
    const id = "id-CCFCE";
    const content = "content-CCFCE";
    this.api.makeTEXT(id, content);
    if (this.api.text(id) === content) {
      el.innerHTML = "ok";
    }
  }
};
