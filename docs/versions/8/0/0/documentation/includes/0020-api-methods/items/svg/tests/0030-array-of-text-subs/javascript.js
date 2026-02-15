window.Class543DB = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET-543DB</text>
</svg>`;
    this.api.addSVG("id-543DB", source)
    this.api.trigger("signal_543DB");
  }

  signal_543DB(_, el) {
    const subs = {
    "TARGET-543DB": ["o", "k"]
 };
    this.#updated = this.api.svg("id-543DB", subs); 
    el.innerHTML = this.#updated.querySelector("text").innerHTML;
    this.api.trigger("display_signal_543DB");
  }

  display_signal_543DB(_, el) {
    el.replaceChildren(this.#updated);
  }
};
