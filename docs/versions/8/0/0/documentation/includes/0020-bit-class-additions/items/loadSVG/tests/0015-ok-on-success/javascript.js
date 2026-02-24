#key = "svg_signal_8F8DD";

signal_8F8DD(_, el) {
  const result = this.loadSVG("el_8F8DD");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
  this.trigger("view_signal_8F8DD");
}

view_signal_8F8DD(svg, el) {
  el.replaceWith(this.renderSVG("el_8F8DD"));
}


bittyReady() {
  this.trigger("given_signal_8F8DD");
}

given_signal_8F8DD(_, __) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.deleteSVG("el_8F8DD");
  this.createSVG("el_8F8DD", input);
  delete this._svg["el_8F8DD"];
  this.trigger("signal_8F8DD");
}
