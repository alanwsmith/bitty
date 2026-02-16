window.Class41441 = class {
  bittyReady() {
    this.api.addElement("id-41441", `<main><div>ok</div></main>`);
    this.api.trigger("signal_41441");
  }

  signal_41441(ev, el) {
    const innerElement = this.api.renderElement("id-41441").querySelector(
      "div",
    );
    el.innerHTML = innerElement.innerHTML;
  }
};
