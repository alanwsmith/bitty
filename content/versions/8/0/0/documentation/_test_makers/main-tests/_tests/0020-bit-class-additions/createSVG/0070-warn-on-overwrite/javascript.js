#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(input, el) {
  const result = this.createSVG("el_$HASH", input);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  const input = `
vg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
<text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
svg>`;
  this.setLocalLogLevel("none");
  this.createSVG("el_$HASH", input);
  this.send(input, "$SIGNAL_NAME");
}