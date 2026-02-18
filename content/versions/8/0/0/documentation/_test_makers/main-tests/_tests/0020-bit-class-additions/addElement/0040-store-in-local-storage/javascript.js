window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.addElement("el_$SIGNAL_NAME", newEl);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const storageData =
      JSON.parse(localStorage.getItem("el_$SIGNAL_NAME")).data;
    const tmp = document.createElement("template");
    tmp.innerHTML = storageData;
    const verifyStorage = tmp.content.firstChild;
    el.innerHTML = verifyStorage.innerHTML;
  }
};
