#key = "svg_signal_F7B2A";

test_signal_F7B2A(_, el) {
  const subs = {
    "TARGET_F7B2A": ["o", "k"],
  };
  const svg = this.renderSVG(this.#key, subs);
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_F7B2A");
}

view_signal_F7B2A(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">TARGET_F7B2A</text>
</svg>`;
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.trigger("test_signal_F7B2A");
}
