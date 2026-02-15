window.Class45844 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_45844</text>
</svg>`;
    this.api.addSVG("id-45844", source)
    this.api.trigger("signal_45844");
  }

  signal_45844(_, el) {
    const subs = { };
    this.#updated = this.api.svg("id-45844", subs); 
    el.innerHTML = "xxx";
    this.api.trigger("display_signal_45844");
  }

  display_signal_45844(_, el) {
    el.replaceChildren(this.#updated);
  }
};
