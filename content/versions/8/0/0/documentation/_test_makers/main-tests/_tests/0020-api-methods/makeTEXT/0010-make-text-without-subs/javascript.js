window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const id = "$ID_NAME";
    const content = "content-$HASH";
    this.api.makeTEXT(id, content);
    if (this.api.text(id) === content) {
      el.innerHTML = "ok";
    }
  }
};
