window.ClassC2A34 = class {
  bittyReady() {
    this.trigger("given_signal_C2A34");
  }

  given_signal_C2A34(_, __) {
    this.setLogLevel("none");
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.addElement("el_signal_C2A34", newEl);
    this.trigger("test_signal_C2A34");
  }

  test_signal_C2A34(_, el) {
    const storageData =
      JSON.parse(localStorage.getItem("el_signal_C2A34")).data;
    const tmp = document.createElement("template");
    tmp.innerHTML = storageData;
    const verifyStorage = tmp.content.firstChild;
    el.innerHTML = verifyStorage.innerHTML;
  }
};
