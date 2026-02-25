signal_FACB7(_, el) {
  const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
  this.setLocalLogLevel("none");
  this.setGlobalLogLevel("none");
  this.createSVG("el_FACB7", input);
  const result = this.createSVG("el_FACB7", input);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}

