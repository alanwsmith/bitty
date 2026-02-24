#key = "svg_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const result = await this.fetchSVG("el_$HASH", url);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(this.renderSVG("el_$HASH"));
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_$HASH", input);
  this.trigger("$SIGNAL_NAME");
}