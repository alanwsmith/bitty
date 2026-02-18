window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  async given_$SIGNAL_NAME(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    await this.fetchElement("el_$SIGNAL_NAME", url);
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    const storage = JSON.parse(localStorage.getItem("el_$SIGNAL_NAME")).data;
    const tmp = document.createElement("template");
    tmp.innerHTML = storage;
    el.innerHTML = tmp.content.firstChild.innerHTML;
  }
};
