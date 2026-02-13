window.$CLASS_NAME = class {
  #_id = "$ID_NAME";

  #_content = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>
</svg>`;

  bittyReady() {
    this.api.addSVG(this.#_id, this.#_content);
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (this.api.svg(this.#_id).querySelector("text").innerHTML === "ok") {
      el.innerHTML = "ok";
    }
    this.api.trigger("display_$SIGNAL_NAME");
  }

  display_$SIGNAL_NAME(_, el) {
    el.replaceChildren(this.api.svg(this.#_id));
  }
};
