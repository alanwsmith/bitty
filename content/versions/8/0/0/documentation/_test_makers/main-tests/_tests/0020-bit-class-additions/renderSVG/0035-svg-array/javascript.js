#key = "svg_$SIGNAL_NAME";

test_$SIGNAL_NAME(replacements, el) {
  const subs = {
    "TARGET_$HASH": replacements,
  };
  const svg = this.renderSVG(this.#key, subs);
  const gotString = [
    // svg.querySelectorAll("text")[0].textContent,
    // svg.querySelectorAll("text")[1].textContent,
  ].join("");
  // el.innerHTML = gotString;
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
  replacementEl.setAttribute("x", "24");
  replacementEl.setAttribute("y", "24");
  replacementEl.setAttribute("font-size", "20");
  replacementEl.setAttribute("text-anchor", "middle");
  replacementEl.setAttribute("fill", "white");
  replacementEl.textContent = "o";
  const replacementEl2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );
  replacementEl2.setAttribute("x", "36");
  replacementEl2.setAttribute("y", "24");
  replacementEl2.setAttribute("font-size", "20");
  replacementEl2.setAttribute("text-anchor", "middle");
  replacementEl2.setAttribute("fill", "white");
  replacementEl2.textContent = "k";
  const replacements = [replacementEl, replacementEl2];
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.send(replacements, "test_$SIGNAL_NAME");
}
