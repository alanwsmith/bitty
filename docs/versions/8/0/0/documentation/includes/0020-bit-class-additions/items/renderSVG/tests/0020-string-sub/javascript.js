

signal_4375F(_, el) {
  const subs = {
    "TARGET_4375F": "test passed",
  };
  const svg = this.renderSVG("el_4375F", subs);
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_4375F");
}

view_signal_4375F(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">TARGET_4375F</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_4375F", input);
  this.trigger("signal_4375F");
}
