#key = "svg_signal_B6D8D";

async test_signal_B6D8D(_, el) {
  this.loadSVG(this.#key);
  const svg = this.renderSVG(this.#key);
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_B6D8D");
}

view_signal_B6D8D(svg, el) {
  el.replaceWith(svg);
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG(this.#key, url);
  delete this._svg[this.#key];
  this.trigger("test_signal_B6D8D");
}
