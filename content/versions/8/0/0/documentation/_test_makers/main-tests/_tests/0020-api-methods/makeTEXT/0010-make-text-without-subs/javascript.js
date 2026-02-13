window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const key = "$ID_NAME";
    const content = "content-$HASH";
    this.api.makeTEXT(key, content);
    if (this.api.text(key) === content) {
      el.innerHTML = "ok";
    }
  }
};
