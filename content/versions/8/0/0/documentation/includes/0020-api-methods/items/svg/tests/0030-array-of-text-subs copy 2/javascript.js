window.Class8E03B = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.api.addSVG("id-8E03B", source)
    this.api.trigger("signal_8E03B");
  }

  signal_8E03B(_, el) {
    const subs = { };
    this.#updated = this.api.svg("id-8E03B", subs); 
    el.innerHTML = "xxx";
    this.api.trigger("display_signal_8E03B");
  }

  display_signal_8E03B(_, el) {
    el.replaceChildren(this.#updated);
  }
};
