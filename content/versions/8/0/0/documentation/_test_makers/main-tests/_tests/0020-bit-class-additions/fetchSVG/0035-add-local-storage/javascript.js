#key = "svg_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  this.loadSVG("el_$HASH");
  const svg = this.renderSVG("el_$HASH");
  // el.innerHTML = svg.querySelector("text").innerHTML;
  // this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG("el_$HASH", url);
  delete this._svg["el_$HASH"];
  this.trigger("$SIGNAL_NAME");
}
