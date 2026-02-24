#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(input, el) {
  this.createSVG(this.#key, input);
  const svg = this.renderSVG(this.#key);
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  input.setAttribute("width", "60");
  input.setAttribute("height", "40");
  input.innerHTML = `<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>`;
  this.send(input, "$SIGNAL_NAME");
}
