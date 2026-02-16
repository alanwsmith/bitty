window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addElement("$ID_NAME", `<div>ok</div>`);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    el.innerHTML = this.api.renderElement("$ID_NAME").innerHTML;
  }
};
