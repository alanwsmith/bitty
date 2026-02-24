#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(subs, el) {
  const svg = this.renderSVG("el_$HASH", subs);
  // el.innerHTML = svg.querySelector("text").textContent;
  // this.send(svg, "view_$SIGNAL_NAME");
}

view_$SIGNAL_NAME(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_$HASH
</svg>`;
  const replacementEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );
  replacementEl.setAttribute("x", "30");
  replacementEl.setAttribute("y", "24");
  replacementEl.setAttribute("font-size", "20");
  replacementEl.setAttribute("text-anchor", "middle");
  replacementEl.setAttribute("fill", "white");
  replacementEl.textContent = "ok";
  const subs = {
    "TARGET_$HASH": replacementEl,
  };
  this.setLocalLogLevel("none");
  this.createSVG("el_$HASH", input);
  this.send(subs, "$SIGNAL_NAME");
}
