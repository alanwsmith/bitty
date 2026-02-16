window.$CLASS_NAME = class {
  bittyReady() {
    this.addElement("$ID_NAME", `<div>ok</div>`);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    console.log(this.element["$ID_NAME"]);
    if (this.element["$ID_NAME"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
