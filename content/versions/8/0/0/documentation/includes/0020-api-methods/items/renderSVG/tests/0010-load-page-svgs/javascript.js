window.ClassFCADA = class {
  #_svg;

  bittyReady() {
    this.api.trigger("signal_FCADA");
  }

  signal_FCADA(_, el) {
    this.#_svg = this.api.svg("id-FCADA");
    el.innerHTML = this.#_svg.querySelector("text").innerHTML;
    this.api.trigger("display_signal_FCADA");
el.innerHTML = "TODO: Move to using bit class directly"
  }

  display_signal_FCADA(_, el) {
    el.replaceChildren(this.#_svg);
el.innerHTML = "TODO: Move to using bit class directly"
  }
};
