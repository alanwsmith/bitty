window.ClassB3CA3 = class {
  #_svg;
  bittyReady() {
    this.api.trigger("signal_B3CA3");
  }

  signal_B3CA3(_, el) {
    const subs = { "TARGET": "UPDATED" };
    this.#_svg = this.api.svg("id-B3CA3", subs);
    if (this.#_svg.querySelector("text").innerHTML === "UPDATED") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_signal_B3CA3");
  }

  display_signal_B3CA3(_, el) {
    el.replaceChildren(this.#_svg);
  }
};
