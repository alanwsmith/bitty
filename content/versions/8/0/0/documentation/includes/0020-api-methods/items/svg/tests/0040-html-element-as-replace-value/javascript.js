window.Class64793 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_64793</text>
</svg>`;
    this.api.addSVG("id-64793", source)
    this.api.trigger("signal_64793");
  }

  signal_64793(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "example-64793";
    const subs = {
      "TARGET_64793": newEl,
    };
    this.#updated = this.api.svg("id-64793", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_64793");
  }

  display_signal_64793(_, el) {
    el.replaceChildren(this.#updated);
  }
};
