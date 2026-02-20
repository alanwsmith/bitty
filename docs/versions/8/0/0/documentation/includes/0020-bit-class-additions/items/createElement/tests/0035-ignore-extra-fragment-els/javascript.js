window.Class148BC = class {
  #key = "el_signal_148BC";

  test_signal_148BC(_, el) {
    const template = document.createElement("template");
    template.innerHTML = `<div></div><div></div>`;
    const result = this.createElement(this.#key, template.content);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_148BC");
  }

  given_signal_148BC(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_148BC");
  }
};
