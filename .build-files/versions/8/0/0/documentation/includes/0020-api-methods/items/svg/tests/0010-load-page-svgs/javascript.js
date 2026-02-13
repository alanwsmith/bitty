window.Class1ECA9 = class {
  bittyReady() {
    this.api.trigger("signal_1ECA9");
  }

  signal_1ECA9(_, el) {
    if (typeof this.api.svg("id-1ECA9") === "object") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_signal_1ECA9");
  }

  display_signal_1ECA9(_, el) {
    el.replaceChildren(this.api.svg("id-1ECA9"));
  }
};
