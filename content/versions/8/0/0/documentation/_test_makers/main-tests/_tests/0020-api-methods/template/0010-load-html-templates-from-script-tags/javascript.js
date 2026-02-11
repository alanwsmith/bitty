window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const target = `<div>example template</div>`;
    const template = this.api.template("$ID_NAME").trim();
    if (target === template) {
      el.innerHTML = "ok";
    }
  }
};
