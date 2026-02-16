window.Class18266 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_18266</text>
</svg>`;
    this.api.addSVG("id-18266", source)
    this.api.trigger("signal_18266");
  }

  signal_18266(_, el) {    
    const items = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    items[0].innerHTML = "example-18266-1";
    items[1].innerHTML = "example-18266-2";
    const subs = {
      "TARGET_18266": items,
    };
    this.#updated = this.api.svg("id-18266", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_18266");
  }

  display_signal_18266(_, el) {
    el.replaceChildren(this.#updated);
  }
};
