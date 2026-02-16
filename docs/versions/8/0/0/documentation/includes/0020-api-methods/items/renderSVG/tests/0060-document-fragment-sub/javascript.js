window.ClassFD9AC = class {
  #updated;

  bittyReady() {
    const source = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TARGET_FD9AC</text>
</svg>`;
    this.api.addSVG("id-FD9AC", source)
    this.api.trigger("signal_FD9AC");
  }

  signal_FD9AC(_, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = "<div>example-FD9AC-1</div><div>example-FD9AC-2</div>";
    const subs = {
      "TARGET_FD9AC": fragment,
    };
    this.#updated = this.api.svg("id-FD9AC", subs); 
    el.innerHTML = "ok";
    this.api.trigger("display_signal_FD9AC");
  }

  display_signal_FD9AC(_, el) {
    el.replaceChildren(this.#updated);
  }
};
