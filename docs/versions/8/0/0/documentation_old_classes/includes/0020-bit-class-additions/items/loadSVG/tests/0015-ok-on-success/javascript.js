signal_8F8DD(_, el) {
  const input = `
<svg version="1.1" width="300" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">test passed</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.deleteSVG("el_8F8DD");
  this.createSVG("el_8F8DD", input);
  delete this._svg["el_8F8DD"];
  const result = this.loadSVG("el_8F8DD");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
  this.trigger("view_signal_8F8DD");
}

view_signal_8F8DD(svg, el) {
  el.replaceWith(this.renderSVG("el_8F8DD"));
}
