window.Class94D78 = class {
  bittyReady() {
    this.trigger("given_signal_94D78");
  }

  given_signal_94D78(_, __) {
    this.setLogLevel("none");
    this.removeElement("el_signal_94D78");
    this.trigger("test_signal_94D78");
  }

  test_signal_94D78(_, el) {
    //this.loadElement("el_signal_94D78", `<div>ok</div>`);
    const result = this.loadElement("el_signal_94D78");
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
    //console.log(this.element["el_signal_94D78"]);
    //delete this.element["el_signal_94D78"];
    //    this.loadElement("el_signal_94D78");
  }
};
