window.ClassBD4CA = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_BD4CA</text>
</svg>`;
    this.api.addSVG("id-BD4CA", source)
    this.api.trigger("signal_BD4CA");
  }

  signal_BD4CA(_, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = "<div>example-BD4CA-1</div><div>example-BD4CA-2</div>";
    const subs = {
      "TARGET_BD4CA": fragment,
    };
    this.#updated = this.api.svg("id-BD4CA", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_BD4CA");
  }

  display_signal_BD4CA(_, el) {
    el.replaceChildren(this.#updated);
  }
};
