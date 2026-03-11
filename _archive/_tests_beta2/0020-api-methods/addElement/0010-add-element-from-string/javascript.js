window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("given_$SIGNAL_NAME verify_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(ev, el) {
    this.addElement("$ID_NAME", `<div>ok</div>`);
  }

  verify_$SIGNAL_NAME(ev, el) {
    if (this.element["$ID_NAME"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
