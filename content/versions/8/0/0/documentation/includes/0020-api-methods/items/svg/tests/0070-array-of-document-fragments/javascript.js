window.ClassA5C48 = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_A5C48</text>
</svg>`;
    this.api.addSVG("id-A5C48", source)
    this.api.trigger("signal_A5C48");
  }

  signal_A5C48(_, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>example-A5C48-1</div><div>example-A5C48-2</div>";
    items[1].innerHTML = "<div>example-A5C48-3</div><div>example-A5C48-4</div>";
    const subs = {
      "TARGET_A5C48": items,
    };
    this.#updated = this.api.svg("id-A5C48", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_A5C48");
  }

  display_signal_A5C48(_, el) {
    el.replaceChildren(this.#updated);
  }
};
