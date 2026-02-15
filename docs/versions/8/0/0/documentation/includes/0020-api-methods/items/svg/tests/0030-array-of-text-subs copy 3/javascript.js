window.Class8B6B3 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.api.addSVG("id-8B6B3", source)
    this.api.trigger("signal_8B6B3");
  }

  signal_8B6B3(_, el) {
    const subs = { };
    this.#updated = this.api.svg("id-8B6B3", subs); 
    el.innerHTML = "xxx";
    this.api.trigger("display_signal_8B6B3");
  }

  display_signal_8B6B3(_, el) {
    el.replaceChildren(this.#updated);
  }
};
