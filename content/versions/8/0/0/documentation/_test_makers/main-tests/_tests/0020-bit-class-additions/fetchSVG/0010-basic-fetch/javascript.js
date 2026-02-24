#key = "svg_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG("el_$HASH", url);
  const svg = this.renderSVG("el_$HASH");
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
