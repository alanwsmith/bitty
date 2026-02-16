window.Class0CF85 = class {
  bittyReady() {
    this.addElement("id-0CF85", `<div>ok</div>`);
    this.api.trigger("signal_0CF85");
  }

  signal_0CF85(ev, el) {
    if (this.element["id-0CF85"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
