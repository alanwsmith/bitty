

async signal_B1D68(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const result = await this.fetchSVG("el_B1D68", url);
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
  this.trigger("view_signal_B1D68");
}

view_signal_B1D68(svg, el) {
  el.replaceWith(this.renderSVG("el_B1D68"));
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_B1D68", input);
  this.trigger("signal_B1D68");
}