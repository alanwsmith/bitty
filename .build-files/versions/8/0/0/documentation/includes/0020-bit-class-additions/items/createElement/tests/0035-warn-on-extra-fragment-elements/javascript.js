window.Class4C991 = class {
  #key = "el_signal_4C991";

  test_signal_4C991(_, el) {
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
    this.setLogLevel("none");
    this.trigger("test_signal_4C991");
  }
};
