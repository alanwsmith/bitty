#key = "svg_$SIGNAL_NAME";

async test_$SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const result = await this.fetchSVG(this.#key, url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(this.renderSVG(this.#key));
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}