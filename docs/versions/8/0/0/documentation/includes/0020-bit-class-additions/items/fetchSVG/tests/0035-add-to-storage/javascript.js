async signal_CE023(_, el) {  
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  await this.fetchSVG("el_CE023", url);
  delete this._svg["el_CE023"];
  this.loadSVG("el_CE023");
  const svg = this.renderSVG("el_CE023");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_CE023");
}

view_signal_CE023(svg, el) {
  el.replaceWith(svg);
}
