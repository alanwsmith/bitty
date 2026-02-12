window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const template = "content for $SIGNAL_NAME";
    const got = this.api.makeTEXT(template);
    if (got === template) {
      el.innerHTML = "ok";
    }
  }
};
