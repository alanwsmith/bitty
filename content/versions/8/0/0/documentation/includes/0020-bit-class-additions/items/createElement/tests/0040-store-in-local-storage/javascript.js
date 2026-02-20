window.Class0866F = class {
  bittyReady() {
    this.trigger("given_signal_0866F");
  }

  given_signal_0866F(_, __) {
    this.setLogLevel("none");
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.addElement("el_signal_0866F", newEl);
    this.trigger("test_signal_0866F");
  }

  test_signal_0866F(_, el) {
    const storageData =
      JSON.parse(localStorage.getItem("el_signal_0866F")).data;
    const tmp = document.createElement("template");
    tmp.innerHTML = storageData;
    const verifyStorage = tmp.content.firstChild;
    //el.innerHTML = verifyStorage.innerHTML;
  }
};
