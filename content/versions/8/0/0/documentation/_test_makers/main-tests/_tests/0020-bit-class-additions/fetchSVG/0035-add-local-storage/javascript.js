#key = "svg_$SIGNAL_NAME";

async test_$SIGNAL_NAME(_, el) {
  this.loadSVG(this.#key);
  const svg = this.renderSVG(this.#key);
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG(this.#key, url);
  delete this._svg[this.#key];
  this.trigger("test_$SIGNAL_NAME");
}