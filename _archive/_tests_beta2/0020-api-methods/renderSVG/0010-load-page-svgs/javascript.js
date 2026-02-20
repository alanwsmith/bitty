window.$CLASS_NAME = class {
  #_svg;

  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    this.#_svg = this.api.svg("$ID_NAME");
    el.innerHTML = this.#_svg.querySelector("text").innerHTML;
    this.api.trigger("display_$SIGNAL_NAME");
el.innerHTML = "TODO: Move to using bit class directly"
  }

  display_$SIGNAL_NAME(_, el) {
    el.replaceChildren(this.#_svg);
el.innerHTML = "TODO: Move to using bit class directly"
  }
};
