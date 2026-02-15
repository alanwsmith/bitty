window.ClassD3B09 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_D3B09</text>
</svg>`;
    this.api.addSVG("id-D3B09", source)
    this.api.trigger("signal_D3B09");
  }

  signal_D3B09(_, el) {    
    const items = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    items[0].innerHTML = "example-D3B09-1";
    items[1].innerHTML = "example-D3B09-2";
    const subs = {
      "TARGET_D3B09": items,
    };
    this.#updated = this.api.svg("id-D3B09", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_D3B09");
  }

  display_signal_D3B09(_, el) {
    el.replaceChildren(this.#updated);
  }
};
