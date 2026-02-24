#key = "svg_signal_697E1";

signal_697E1(replacements, el) {
  const subs = {
    "TARGET_697E1": replacements,
  };
  const svg = this.renderSVG("el_697E1", subs);
  const gotString = [
    // svg.querySelectorAll("text")[0].textContent,
    // svg.querySelectorAll("text")[1].textContent,
  ].join("");
  // el.innerHTML = gotString;
  // this.send(svg, "view_signal_697E1");
}

view_signal_697E1(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_697E1
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
  this.setLocalLogLevel("none");
  this.createSVG("el_697E1", input);
  this.send(replacements, "signal_697E1");
}
