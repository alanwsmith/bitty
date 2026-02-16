window.Class0CF85 = class {
  bittyReady() {
    this.addElement("id-0CF85", `<div>ok</div>`);
    this.api.trigger("signal_0CF85");
  }

  signal_0CF85(ev, el) {
    console.log(this.element["id-0CF85"]);
    if (this.element["id-0CF85"] === `<div>ok</div>`) {
      el.innerHTML = "ok";
    }
  }
};
