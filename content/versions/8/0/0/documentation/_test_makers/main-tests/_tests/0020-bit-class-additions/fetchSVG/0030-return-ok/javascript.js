#key = "svg_$SIGNAL_NAME";

async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const result = await this.fetchSVG("el_$HASH", url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
  this.trigger("view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(this.renderSVG("el_$HASH"));
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}
