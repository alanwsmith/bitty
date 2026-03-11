window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME verify_$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const element = document.createElement("div");
    element.innerHTML = "ok";
    this.addElement("$ID_NAME", element);
  }

  verify_$SIGNAL_NAME(ev, el) {
    if (this.element["$ID_NAME"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
