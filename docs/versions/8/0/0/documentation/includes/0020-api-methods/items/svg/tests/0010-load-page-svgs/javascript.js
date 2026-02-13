window.Class1ECA9 = class {
  #_svg;

  bittyReady() {
    this.api.trigger("signal_1ECA9");
  }

  signal_1ECA9(_, el) {
    this.#_svg = this.api.svg("id-1ECA9");
    el.innerHTML = this.#_svg.querySelector("text").innerHTML;
    this.api.trigger("display_signal_1ECA9");
  }

  display_signal_1ECA9(_, el) {
    el.replaceChildren(this.#_svg);
  }
};
