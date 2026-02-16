window.$CLASS_NAME = class {
  bittyReady() {
    this.api.addElement("$ID_NAME", `<main><div>ok</div></main>`);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(ev, el) {
    const innerElement = this.api.renderElement("$ID_NAME").querySelector(
      "div",
    );
    el.innerHTML = innerElement.innerHTML;
  }
};
