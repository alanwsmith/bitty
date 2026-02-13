window.ClassCCFCE = class {
  bittyReady() {
    this.api.trigger("signal_CCFCE");
  }

  signal_CCFCE(ev, el) {
    const template = "content for signal_CCFCE";
    const got = this.api.makeTEXT(template);
    if (got === template) {
      el.innerHTML = "ok";
    }
  }
};
