#key = "svg_signal_9DD5F";

test_signal_9DD5F(subs, el) {
  const svg = this.renderSVG(this.#key, subs);
  el.innerHTML = svg.querySelector("text").textContent;
  this.send(svg, "view_signal_9DD5F");
}

view_signal_9DD5F(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_9DD5F
svg>`;
  const template = document.createElement("template");
  template.innerHTML =
    `<text x="24" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>`;
  const subs = {
    "TARGET_9DD5F": template.content.firstChild,
  };
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.send(subs, "test_signal_9DD5F");
}