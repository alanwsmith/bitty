#key = "svg_signal_A9C93";

async signal_A9C93(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const result = await this.fetchSVG("el_A9C93", url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
  this.trigger("view_signal_A9C93");
}

view_signal_A9C93(svg, el) {
  el.replaceWith(this.renderSVG("el_A9C93"));
}


bittyReady() {
  this.trigger("signal_A9C93");
}
