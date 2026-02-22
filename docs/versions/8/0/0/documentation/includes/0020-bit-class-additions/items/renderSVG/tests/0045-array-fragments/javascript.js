#key = "svg_signal_0EB22";

test_signal_0EB22(subs, el) {
  const svg = this.renderSVG(this.#key, subs);
  const gotString = [
    svg.querySelectorAll("text")[0].textContent,
    svg.querySelectorAll("text")[1].textContent,
  ].join("");
  el.innerHTML = gotString;
  this.send(svg, "view_signal_0EB22");
}

view_signal_0EB22(svg, el) {
  el.replaceWith(svg);
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_0EB22
svg>`;
  const template = document.createElement("template");
  template.innerHTML =
    `<text x="24" y="24" font-size="20" text-anchor="middle" fill="white">o</text>`;
  const template2 = document.createElement("template");
  template2.innerHTML =
    `<text x="36" y="24" font-size="20" text-anchor="middle" fill="white">k</text>`;
  const replacementArray = [
    template.content,
    template2.content,
  ];
  const subs = {
    "TARGET_0EB22": replacementArray,
  };
  this.setLogLevel("none");
  this.createSVG(this.#key, input);
  this.send(subs, "test_signal_0EB22");
}