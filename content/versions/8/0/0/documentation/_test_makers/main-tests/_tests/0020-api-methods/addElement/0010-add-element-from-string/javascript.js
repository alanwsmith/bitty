window.$CLASS_NAME = class {
  bittyReady() {
    this.addElement("$ID_NAME", `<div>ok</div>`);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    if (this.element["$ID_NAME"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
