#key = "svg_signal_74651";

async test_signal_74651(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG(this.#key, url);
  const svg = this.renderSVG(this.#key);
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_74651");
}

view_signal_74651(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("test_signal_74651");
}