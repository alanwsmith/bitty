window.Class88E1C = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET-88E1C</text>
</svg>`;
    this.api.addSVG("id-88E1C", source)
    this.api.trigger("signal_88E1C");
  }

  signal_88E1C(_, el) {
    const subs = {
    "TARGET-88E1C": ["o", "k"]
 };
    this.#updated = this.api.svg("id-88E1C", subs); 
    el.innerHTML = this.#updated.querySelector("text").innerHTML;
    this.api.trigger("display_signal_88E1C");
  }

  display_signal_88E1C(_, el) {
    el.replaceChildren(this.#updated);
  }
};
