window.Class507FA = class {
  #_id = "id-507FA";

  #_content = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>
</svg>`;

  bittyReady() {
    this.api.addSVG(this.#_id, this.#_content);
    this.api.trigger("signal_507FA");
  }

  signal_507FA(_, el) {
    if (this.api.svg(this.#_id).querySelector("text").innerHTML === "ok") {
      el.innerHTML = "ok";
    }
  el.innerHTML = "todo";
    this.api.trigger("display_signal_507FA");
  }

  display_signal_507FA(_, el) {
    el.replaceChildren(this.api.svg(this.#_id));
  el.innerHTML = "todo";
  }
};
