window.Class527AB = class {
  #_id = "id-527AB";

  bittyReady() {
    this.api.trigger("signal_527AB");
  }

  signal_527AB(_, el) {
    const content = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.api.makeSVG(this.#_id, content);
    if (this.api.svg(this.#_id).querySelector("text").innerHTML === "ok") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_signal_527AB");
  }

  display_signal_527AB(_, el) {
    el.replaceChildren(this.api.svg(this.#_id));
  }
};
