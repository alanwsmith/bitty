#key = "svg_signal_58C94";

signal_58C94(input, el) {
  this.createSVG("el_58C94", input);
  const svg = this.renderSVG("el_58C94");
  el.innerHTML = svg.querySelector("text").innerHTML;
  this.send(svg, "view_signal_58C94");
}

view_signal_58C94(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
    <svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="green" />
      <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
    </svg>`;
  this.send(input, "signal_58C94");
}
