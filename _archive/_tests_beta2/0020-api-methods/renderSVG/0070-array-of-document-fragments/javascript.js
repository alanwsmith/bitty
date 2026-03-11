window.$CLASS_NAME = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_$HASH</text>
</svg>`;
    this.api.addSVG("$ID_NAME", source)
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const items = [
      document.createDocumentFragment(),
      document.createDocumentFragment(),
    ];
    items[0].innerHTML = "<div>$EXAMPLE_NAME-1</div><div>$EXAMPLE_NAME-2</div>";
    items[1].innerHTML = "<div>$EXAMPLE_NAME-3</div><div>$EXAMPLE_NAME-4</div>";
    const subs = {
      "TARGET_$HASH": items,
    };
    this.#updated = this.api.svg("$ID_NAME", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_$SIGNAL_NAME");
  }

  display_$SIGNAL_NAME(_, el) {
    el.replaceChildren(this.#updated);
  }
};
