window.ClassB2B5A = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_B2B5A</text>
</svg>`;
    this.api.addSVG("id-B2B5A", source)
    this.api.trigger("signal_B2B5A");
  }

  signal_B2B5A(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "example-B2B5A";
    const subs = {
      "TARGET_B2B5A": newEl,
    };
    this.#updated = this.api.svg("id-B2B5A", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_B2B5A");
  }

  display_signal_B2B5A(_, el) {
    el.replaceChildren(this.#updated);
  }
};
