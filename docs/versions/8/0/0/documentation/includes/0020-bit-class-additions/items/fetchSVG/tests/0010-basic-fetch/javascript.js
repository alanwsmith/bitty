#key = "svg_signal_74651";

async signal_74651(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG("el_74651", url);
  const svg = this.renderSVG("el_74651");
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_signal_74651");
}

view_signal_74651(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("signal_74651");
}
