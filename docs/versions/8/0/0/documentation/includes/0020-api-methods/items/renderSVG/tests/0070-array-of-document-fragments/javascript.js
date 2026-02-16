window.Class9B78B = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_9B78B</text>
</svg>`;
    this.api.addSVG("id-9B78B", source)
    this.api.trigger("signal_9B78B");
  }

  signal_9B78B(_, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>example-9B78B-1</div><div>example-9B78B-2</div>";
    items[1].innerHTML = "<div>example-9B78B-3</div><div>example-9B78B-4</div>";
    const subs = {
      "TARGET_9B78B": items,
    };
    this.#updated = this.api.svg("id-9B78B", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_9B78B");
  }

  display_signal_9B78B(_, el) {
    el.replaceChildren(this.#updated);
  }
};
