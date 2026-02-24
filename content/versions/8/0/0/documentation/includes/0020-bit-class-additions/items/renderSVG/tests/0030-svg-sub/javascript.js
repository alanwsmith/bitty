

signal_15988(subs, el) {
  const svg = this.renderSVG("el_15988", subs);
  // el.innerHTML = svg.querySelector("text").textContent;
  // this.send(svg, "view_signal_15988");
}

view_signal_15988(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_15988
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
  replacementEl.textContent = "test passed";
  const subs = {
    "TARGET_15988": replacementEl,
  };
  this.setLocalLogLevel("none");
  this.createSVG("el_15988", input);
  this.send(subs, "signal_15988");
}
