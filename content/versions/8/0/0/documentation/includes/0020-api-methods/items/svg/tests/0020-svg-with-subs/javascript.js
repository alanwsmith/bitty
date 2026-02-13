window.Class4FEA0 = class {
  #_svg;
  bittyReady() {
    this.api.trigger("signal_4FEA0");
  }

  signal_4FEA0(_, el) {
    const subs = { "TARGET": "UPDATED" };
    this.#_svg = this.api.svg("id-4FEA0", subs);
    if (this.#_svg.querySelector("text").innerHTML === "UPDATED") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_signal_4FEA0");
  }

  display_signal_4FEA0(_, el) {
    el.replaceChildren(this.#_svg);
  }
};
