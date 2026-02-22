#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const subs = {
    "TARGET_$HASH": "ok",
  };
  const svg = this.renderSVG(this.#key, subs);
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">TARGET_$HASH</text>
svg>`;
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.trigger("test_$SIGNAL_NAME");
}