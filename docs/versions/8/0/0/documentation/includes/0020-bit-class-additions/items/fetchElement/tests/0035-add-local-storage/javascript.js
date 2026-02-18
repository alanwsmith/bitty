window.Class92749 = class {
  bittyReady() {
    this.trigger("given_signal_92749");
  }

  async given_signal_92749(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    await this.fetchElement("el_signal_92749", url);
    this.trigger("test_signal_92749");
  }

  async test_signal_92749(_, el) {
    const storage = JSON.parse(localStorage.getItem("el_signal_92749")).data;
    const tmp = document.createElement("template");
    tmp.innerHTML = storage;
    el.innerHTML = tmp.content.firstChild.innerHTML;
  }
};
