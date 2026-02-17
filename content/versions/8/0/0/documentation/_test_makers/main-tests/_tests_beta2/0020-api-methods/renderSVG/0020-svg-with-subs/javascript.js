window.$CLASS_NAME = class {
  #_svg;
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const subs = { "TARGET": "UPDATED" };
    this.#_svg = this.api.svg("$ID_NAME", subs);
    if (this.#_svg.querySelector("text").innerHTML === "UPDATED") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_$SIGNAL_NAME");
  }

  display_$SIGNAL_NAME(_, el) {
    el.replaceChildren(this.#_svg);
  }
};
