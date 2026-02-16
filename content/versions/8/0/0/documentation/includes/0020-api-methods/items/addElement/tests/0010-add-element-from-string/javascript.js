window.Class0CF85 = class {
  bittyReady() {
    this.api.trigger("given_signal_0CF85 verify_signal_0CF85");
  }

  given_signal_0CF85(ev, el) {
    this.addElement("id-0CF85", `<div>ok</div>`);
  }

  verify_signal_0CF85(ev, el) {
    if (this.element["id-0CF85"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
