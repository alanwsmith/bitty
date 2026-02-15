window.Class19494 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.api.addSVG("id-19494", source)
    this.api.trigger("signal_19494");
  }

  signal_19494(_, el) {
    const subs = { };
    this.#updated = this.api.svg("id-19494", subs); 
    el.innerHTML = "xxx";
    this.api.trigger("display_signal_19494");
  }

  display_signal_19494(_, el) {
    el.replaceChildren(this.#updated);
  }
};
